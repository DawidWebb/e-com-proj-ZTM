import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { DivCartDropdownContainer, DivCartItems, SpanEmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();

	const goToCheckoutHandler = useCallback(() => {
		// navigate("/check-out");
	}, [navigate]);

	return (
		<DivCartDropdownContainer>
			<DivCartItems>
				{ cartItems.length ? (
					cartItems.map((item) => <CartItem key={ item.id } cartItem={ item } />)
				) : (
					<SpanEmptyMessage>Your cart is empty</SpanEmptyMessage>
				) }
			</DivCartItems>
			<Button onClick={ goToCheckoutHandler }>GO TO CHECKOUT</Button>
			<Button onClick={ goToCheckoutHandler }>Update</Button>
		</DivCartDropdownContainer>
	);
};

export default CartDropdown;
