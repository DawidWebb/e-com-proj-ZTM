import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { DivProductsContainer } from "./shop.styles";

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getcategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(categoryMap));
		};
		getcategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
