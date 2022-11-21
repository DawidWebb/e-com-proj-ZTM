import { FC, memo } from "react";
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { DivCartItemContainer, DivItemDetails, SpanName } from "./cart-item.styles";

type CartItemProps = {
	cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;

	return (
		<DivCartItemContainer>
			<img src={ imageUrl } alt={ `${ name }` } />
			<DivItemDetails>
				<SpanName>{ name }</SpanName>
				<span>
					{ quantity } x ${ price }
				</span>
			</DivItemDetails>
		</DivCartItemContainer>
	);
});

export default CartItem;
