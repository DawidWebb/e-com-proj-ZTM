import { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap, selectIsCategoriesIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";

import { H2CategoryTitle, DivCategoryContainer } from "./category.styles";

type CategoryRouteParams = {
	category: string;
};

const Category = () => {
	const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesIsLoading);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<H2CategoryTitle className="category-title">{ category }</H2CategoryTitle>

			{ isLoading ? (
				<Spinner />
			) : (
				<DivCategoryContainer className="category-container">
					{ products && products.map((product) => <ProductCard key={ product.id } product={ product } />) }
				</DivCategoryContainer>
			) }
		</Fragment>
	);
};

export default Category;
