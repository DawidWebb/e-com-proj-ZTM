import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../../components/button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { DivCartDropdownContainer, DivCartItems, SpanEmptyMessage } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/check-out");
	};

	return (
		<DivCartDropdownContainer>
			<DivCartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<SpanEmptyMessage>Your cart is empty</SpanEmptyMessage>
				)}
			</DivCartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</DivCartDropdownContainer>
	);
};

export default CartDropdown;
