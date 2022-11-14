import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const selectIscartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0),
);
