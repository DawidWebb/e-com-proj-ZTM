import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSEION);
export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) =>
	createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });
export const signInSucces = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCES, user);
export const signInFailer = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILER, error);

export const signUpStart = (email, password, displayName) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });
export const signUpSucces = (user, additionalDetails) =>
	createAction(USER_ACTION_TYPES.SIGN_IN_SUCCES, { user, additionalDetails });
export const signUpFailer = (error) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILER, error);

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutSucces = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCES);
export const signOutFailer = (error) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILER, error);
