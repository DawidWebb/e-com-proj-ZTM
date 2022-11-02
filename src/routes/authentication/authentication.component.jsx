// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
	// auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	// signInGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
	// useEffect(async () => {
	// 	const response = await getRedirectResult(auth);
	// 	if (response) {
	// 		const userDocRef = await createUserDocumentFromAuth(response.user);
	// 	}
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		//  <button onClick={logGoogleUser}>Sign in with Google</button>
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
