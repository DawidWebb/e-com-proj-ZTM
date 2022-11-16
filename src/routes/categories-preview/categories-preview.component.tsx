import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-previev.component";
import Spinner from "../../components/spinner/spinner.component";
import { selectIsCategoriesIsLoading } from "../../store/categories/categories.selector";
const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesIsLoading);
	return (
		<div>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				})
			)}
		</div>
	);
};

export default CategoriesPreview;
