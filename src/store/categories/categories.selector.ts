import { createSelector } from "reselect";
import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesReducer) => categoriesReducer.categories,
);

//jeżeli tablica categories sie nie zmnieni nie uruchamia poniższej metody, tylko korzysta z powyższego catch

export const selectCategoriesMap = createSelector([selectCategories], (categories): CategoryMap =>
	categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;

		return acc;
	}, {} as CategoryMap),
);

export const selectIsCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading,
);
