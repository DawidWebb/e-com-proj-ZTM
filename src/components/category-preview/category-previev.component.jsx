import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import { DivCategoryPreviewContainer, SpanTitle, DivPreview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
	return (
		<DivCategoryPreviewContainer>
			<h2>
				<SpanTitle>
					{" "}
					<Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
				</SpanTitle>
			</h2>
			<DivPreview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</DivPreview>
		</DivCategoryPreviewContainer>
	);
};

export default CategoryPreview;
