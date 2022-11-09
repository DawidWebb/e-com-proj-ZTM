import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectIscartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { DivCardIconContainer, SpanItemCount, ShoppinIcon } from "./cart-icon.styles";

const CartIcon = () => {
	const cartItems = useSelector(selectCartItems);
	const isCartOpen = useSelector(selectIscartOpen);

	const dispatch = useDispatch();

	const cartItemsQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

	const toogleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};
	return (
		<DivCardIconContainer onClick={toogleIsCartOpen}>
			<ShoppinIcon />
			<SpanItemCount>{cartItemsQuantity}</SpanItemCount>
		</DivCardIconContainer>
	);
};

export default CartIcon;
