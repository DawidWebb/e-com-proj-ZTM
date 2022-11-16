import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchcategoriesSusess, fetchcategoriesFailed } from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
	try {
		const categoriesArray = yield* call(getCategoriesAndDocuments); // wywołanie funcko poprzez yield call
		yield* put(fetchcategoriesSusess(categoriesArray)); //yield put zamiast dispatch
	} catch (error) {
		yield* put(fetchcategoriesFailed(error as Error));
	}
}
export function* onFetchCategories() {
	//moment w którym zaczyna się akcja
	yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync); // jeżeli usłuszysz kilka akcji daj mi ostatnią
}

export function* categoriesSaga() {
	//run all inside and only complete if its done, tablica różnych wywołań funkcji - wszystkie z tablicy muszą być kompletne przed kontynuowaniem
	yield* all([call(onFetchCategories)]);
}
