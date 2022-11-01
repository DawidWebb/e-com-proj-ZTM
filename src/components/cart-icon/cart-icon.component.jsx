import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	const toogleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div className="cart-icon-container" onClick={toogleIsCartOpen}>
			<ShoppinIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
