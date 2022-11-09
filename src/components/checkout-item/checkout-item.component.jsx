import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
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

	const cartItems = useSelector(selectCartItems);

	const dispatch = useDispatch();

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
	const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
