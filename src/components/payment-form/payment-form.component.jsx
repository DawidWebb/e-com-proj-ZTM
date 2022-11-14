import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { DivPaymentFormContainer, FromContainer } from "./payment-form.style";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymenHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: 10000 }),
		}).then((res) => {
			return res.json();
		});

		console.log(response);
	};

	return (
		<DivPaymentFormContainer>
			<FromContainer onSubmit={paymenHandler}>
				<h2>Credit Card Payment</h2>
				<CardElement />
				<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
			</FromContainer>
		</DivPaymentFormContainer>
	);
};

export default PaymentForm;