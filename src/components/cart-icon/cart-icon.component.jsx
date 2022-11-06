import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
import { DivCardIconContainer, SpanItemCount, ShoppinIcon } from "./cart-icon.styles";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

	const cartItemsQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

	const toogleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<DivCardIconContainer onClick={toogleIsCartOpen}>
			<ShoppinIcon />
			<SpanItemCount>{cartItemsQuantity}</SpanItemCount>
		</DivCardIconContainer>
	);
};

export default CartIcon;
