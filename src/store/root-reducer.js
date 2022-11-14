import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { caregoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	categories: caregoriesReducer,
	cart: cartReducer,
});
