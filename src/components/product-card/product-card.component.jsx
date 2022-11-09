import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { DivProductCardContainer, DivFooter, SpanName, SpanPrice } from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;

	const cartItems = useSelector(selectCartItems);

	const dispatch = useDispatch();

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
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
