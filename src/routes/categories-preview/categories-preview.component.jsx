import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-previev.component";

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	return (
		<div>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return <CategoryPreview key={title} title={title} products={products} />;
			})}
		</div>
	);
};

export default CategoriesPreview;
