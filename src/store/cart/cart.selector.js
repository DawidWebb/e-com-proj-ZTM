import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const selectIscartOpen = createSelector([selectCartReducer], (cart) => cart.isCartOpen);
