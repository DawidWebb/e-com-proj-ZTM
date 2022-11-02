import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
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

export const CartContext = createContext({
	//default values
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};

	const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart, clearItemFromCart };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
