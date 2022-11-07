import { useContext, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import { H2CategoryTitle, DivCategoryContainer } from "./category.styles";

const Category = () => {
	const { category } = useParams();

	const { categoriesMap } = useContext(CategoriesContext);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<H2CategoryTitle className="category-title">{category}</H2CategoryTitle>
			<DivCategoryContainer className="category-container">
				{products && products.map((product) => <ProductCard key={product.id} product={product} />)}
			</DivCategoryContainer>
		</Fragment>
	);
};

export default Category;
