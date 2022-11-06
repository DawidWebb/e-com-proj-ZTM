import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { DivCheckoutContainer, DivCheckoutHeader, SpanTotal, DivHeaderBlock } from "./checkout.styles";

const CheckOut = () => {
	const { cartItems } = useContext(CartContext);

	const totalValuesOfQuantities = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

	return (
		<DivCheckoutContainer>
			<DivCheckoutHeader>
				<DivHeaderBlock>
					<span>Product</span>
				</DivHeaderBlock>
				<DivHeaderBlock>
					<span>Description</span>
				</DivHeaderBlock>
				<DivHeaderBlock>
					<span>Quantity</span>
				</DivHeaderBlock>
				<DivHeaderBlock>
					<span>Price</span>
				</DivHeaderBlock>
				<DivHeaderBlock>
					<span>Remove</span>
				</DivHeaderBlock>
			</DivCheckoutHeader>
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} cartItem={item} />;
			})}
			<SpanTotal>TOTAL: ${totalValuesOfQuantities}</SpanTotal>
		</DivCheckoutContainer>
	);
};

export default CheckOut;
