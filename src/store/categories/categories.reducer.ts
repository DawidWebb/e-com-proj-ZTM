import { AnyAction } from "redux";
import { Category } from "./categories.types";
import { fetchCategoriesStart, fetchcategoriesSusess, fetchcategoriesFailed } from "./categories.action";

export type CategoriesState = {
	readonly categories: Category[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
};

export const caregoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction): CategoriesState => {

	if (fetchCategoriesStart.match(action)) {
		return { ...state, isLoading: true };
	}

	if (fetchcategoriesSusess.match(action)) {
		return { ...state, categories: action.payload, isLoading: false };
	}

	if (fetchcategoriesFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}

	return state;

	// switch (action.type) {
	// 	case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
	// 		return { ...state, isLoading: true };
	// 	case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS:
	// 		return { ...state, categories: action.payload, isLoading: false };
	// 	case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
	// 		return { ...state, error: action.payload, isLoading: false };
	// 	default:
	// 		return state;
	// }
};
