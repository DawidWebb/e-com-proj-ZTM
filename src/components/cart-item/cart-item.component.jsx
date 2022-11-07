import { DivCartItemContainer, DivItemDetails, SpanName } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<DivCartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<DivItemDetails>
				<SpanName>{name}</SpanName>
				<span>
					{quantity} x ${price}
				</span>
			</DivItemDetails>
		</DivCartItemContainer>
	);
};

export default CartItem;
