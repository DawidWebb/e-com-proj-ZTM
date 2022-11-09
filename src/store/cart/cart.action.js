import { CART_ACTIONS_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, product) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
		);
	}
	return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	//check if quantity is equal to 1, if it's remove that item from cart -> that means we have not this item in cart.
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== cartItemToRemove.id);
	}

	//return back cartitems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, product) => {
	const newCartItems = addCartItem(cartItems, product);
	return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) => createAction(CART_ACTIONS_TYPES.SET_CART_OPEN, boolean);
