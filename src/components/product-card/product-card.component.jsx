import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { DivProductCardContainer, DivFooter, SpanName, SpanPrice } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;

	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
	};

	return (
		<DivProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<DivFooter>
				<SpanName>{name}</SpanName>
				<SpanPrice>{price}</SpanPrice>
			</DivFooter>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
				Add to cart
			</Button>
		</DivProductCardContainer>
	);
};

export default ProductCard;
