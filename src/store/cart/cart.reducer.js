import { CART_ACTIONS_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;
	console.log(payload);
	console.log("TYPE:", type);

	switch (type) {
		case CART_ACTIONS_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
			};
		case CART_ACTIONS_TYPES.SET_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			return state;
	}
};
