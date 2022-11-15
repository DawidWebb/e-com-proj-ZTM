import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTIONS_TYPES {
	SET_CART_ITEMS = "SET_CART_ITEMS",
	SET_CART_OPEN = "SET_CART_OPEN",
	SET_CATR_COUNT = "SET_CATR_COUNT"
};


export type CartItem = CategoryItem & {
	quantity: number;
};