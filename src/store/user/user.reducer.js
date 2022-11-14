import { USER_ACTION_TYPES } from "./user.types";

const INITLAI_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = INITLAI_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCES:
			return {
				...state,
				currentUser: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCES:
			return { ...state, currentUser: null };
		case USER_ACTION_TYPES.SIGN_IN_FAILER:
		case USER_ACTION_TYPES.SIGN_UP_FAILER:
		case USER_ACTION_TYPES.SIGN_OUT_FAILER:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};
