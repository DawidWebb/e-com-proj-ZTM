import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { DivCheckoutContainer, DivCheckoutHeader, SpanTotal, DivHeaderBlock } from "./checkout.styles";

const CheckOut = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

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
			<SpanTotal>TOTAL: ${cartTotal}</SpanTotal>
			<PaymentForm />
		</DivCheckoutContainer>
	);
};

export default CheckOut;
