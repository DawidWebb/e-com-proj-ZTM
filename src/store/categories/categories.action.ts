import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from "./categories.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);


export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSucess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, Category[]>;
export type FetchCategoriesFaild = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;


export type CategoryAction = FetchCategoriesStart | FetchCategoriesSucess | FetchCategoriesFaild;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchcategoriesSusess = withMatcher((categoriesArray: Category[]): FetchCategoriesSucess =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, categoriesArray));

export const fetchcategoriesFailed = withMatcher((error: Error): FetchCategoriesFaild => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));

// export const fetchCategoriesAsync = () => async (dispatch) => {
// 	dispatch(fetchCategoriesStart());

// 	try {
// 		const categoriesArray = await getCategoriesAndDocuments("categories");
// 		dispatch(fetchcategoriesSusess(categoriesArray));
// 	} catch (error) {
// 		dispatch(fetchcategoriesFailed(error));
// 	}
// };
