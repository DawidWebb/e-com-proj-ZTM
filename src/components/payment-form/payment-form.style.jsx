import styled from "styled-components";
import Button from "../button/button.component";

export const DivPaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const FromContainer = styled.form`
	height: 100px;
	min-width: 500px;
`;

export const PaymentButton = styled(Button)`
	margin-top: 30px;
	margin-left: auto;
`;
