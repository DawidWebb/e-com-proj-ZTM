import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
	DivCheckoutItemContainer,
	DivImageContainer,
	SpanName,
	SpanValue,
	SpanQuantity,
	DivArrow,
	DivRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemToCartHandler = () => addItemToCart(cartItem);
	const removeItemFromCartHandler = () => removeItemFromCart(cartItem);

	return (
		<DivCheckoutItemContainer>
			<DivImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</DivImageContainer>
			<SpanName>{name}</SpanName>
			<SpanQuantity>
				<DivArrow onClick={removeItemFromCartHandler}>&#10094;</DivArrow>
				<SpanValue> {quantity}</SpanValue>
				<DivArrow onClick={addItemToCartHandler}>&#10095;</DivArrow>
			</SpanQuantity>
			<span className="price">{price}</span>
			<DivRemoveButton onClick={clearItemHandler}>&#10005;</DivRemoveButton>
		</DivCheckoutItemContainer>
	);
};

export default CheckoutItem;
