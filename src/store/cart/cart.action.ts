import { CART_ACTIONS_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItem[], product: CategoryItem): CartItem[] => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
		);
	}
	return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
	//find the cart item to remove
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	//check if quantity is equal to 1, if it's remove that item from cart -> that means we have not this item in cart.
	if (existingCartItem && existingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== cartItemToRemove.id);
	}

	//return back cartitems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
	);
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
	return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS_TYPES.SET_CART_OPEN, boolean>;

export type SetCartItemns = ActionWithPayload<CART_ACTIONS_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTIONS_TYPES.SET_CART_OPEN, boolean));

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItemns => createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], product: CategoryItem) => {
	const newCartItems = addCartItem(cartItems, product);
	return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return setCartItems(newCartItems);
};

