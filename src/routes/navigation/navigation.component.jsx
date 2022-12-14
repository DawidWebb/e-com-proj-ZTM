import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";
import { selectIscartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles.jsx";

const NavigationBar = () => {
	const currentUser = useSelector(selectCurrentUser);

	const isCartOpen = useSelector(selectIscartOpen);

	const dispatch = useDispatch();

	const handleSignOutUser = () => {
		dispatch(signOutStart());
	};

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrownLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<span onClick={handleSignOutUser}>SIGN OUT</span>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
