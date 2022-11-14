import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesReducer) => categoriesReducer.categories,
);

//jeżeli tablica categories sie nie zmnieni nie uruchamia poniższej metody, tylko korzysta z powyższego catch

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
	categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;

		return acc;
	}, {}),
);

export const selectIsCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading,
);
