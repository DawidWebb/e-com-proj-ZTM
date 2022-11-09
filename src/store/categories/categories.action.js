import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchcategoriesSusess = (categoriesArray) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS, categoriesArray);
export const fetchcategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());

	try {
		const categoriesArray = await getCategoriesAndDocuments("categories");
		dispatch(fetchcategoriesSusess(categoriesArray));
	} catch (error) {
		dispatch(fetchcategoriesFailed(error));
	}
};
