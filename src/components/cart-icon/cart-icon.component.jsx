import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

	const cartItemsQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

	const toogleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div className="cart-icon-container" onClick={toogleIsCartOpen}>
			<ShoppinIcon className="shopping-icon" />
			<span className="item-count">{cartItemsQuantity}</span>
		</div>
	);
};

export default CartIcon;
