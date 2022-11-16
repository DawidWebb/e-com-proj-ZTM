import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user.types";
import {
	signInSucces,
	signInFailer,
	signUpSucces,
	signUpFailer,
	signOutSucces,
	signOutFailer,
	signOutStart,

} from "./user.action";
import {
	getCurrentUser,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
	createAuthUserWithEmailAndPassword,
	signOutUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: any) {
	try {
		const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);

		if (userSnapshot) {

			yield* put(signInSucces({ id: userSnapshot.id, ...userSnapshot.data }));
		}

	} catch (err) {
		yield* put(signInFailer(err));
	}
}

export function* isUserAuth() {
	try {
		const userAuth = yield* call(getCurrentUser);
		if (!userAuth) return;
		yield* call(getSnapshotFromUserAuth, userAuth);
	} catch (err) {
		yield* put(signInFailer(err));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield* call(signInWithGooglePopup);
		yield* call(getSnapshotFromUserAuth, user);
	} catch (err) {
		yield* put(signInFailer(err));
	}
}

export function* signInWithEmail({ payload: { email, password } }: any) {
	try {
		const userCredencial = yield* call(signInAuthUserWithEmailAndPassword, email, password);

		if (userCredencial) {
			const { user } = userCredencial;
			yield* call(getSnapshotFromUserAuth, user);
		}

	} catch (err) {
		yield* put(signInFailer(err));
	}
}

export function* signUp({ payload: { email, password, diplayName } }: any) {
	try {
		const userCredencial = yield* call(createAuthUserWithEmailAndPassword, email, password);

		if (userCredencial) {
			const { user } = userCredencial;
			yield* put(signUpSucces(user, { diplayName }));
		}
	} catch (err) {
		yield* put(signUpFailer(err));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }: any) {
	yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* signOut() {
	try {
		yield* call(signOutUser);
		yield* put(signOutSucces());
	} catch (err) {
		yield* put(signOutFailer(err));
	}
}

export function* onEmailSignInStart() {
	yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
	yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
	yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSEION, isUserAuth);
}

export function* onSignInUpStart() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignInUpSuccess() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCES, signInAfterSignUp);
}

export function* onSignOutStart() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield* all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignInUpSuccess),
		call(onSignInUpStart),
		call(onSignOutStart),
	]);
}
