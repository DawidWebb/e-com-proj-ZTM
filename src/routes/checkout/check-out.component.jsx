import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckOut = () => {
	const { cartItems } = useContext(CartContext);

	const totalValuesOfQuantities = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} cartItem={item} />;
			})}
			<span className="total">TOTAL: ${totalValuesOfQuantities}</span>
		</div>
	);
};

export default CheckOut;
