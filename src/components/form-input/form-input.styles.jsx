import styled, { css } from "styled-components";
import { colors } from "../../variables.styles";

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${colors.black};
`;

export const FormInputLabel = styled.div`
	color: ${colors.grey};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
	background: none;
	background-color: ${colors.white};
	color: ${colors.grey};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${colors.grey};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkLabelStyles}
	}
`;

export const DivGroup = styled.div`
	position: relative;
	margin: 45px 0;

	input[type="password"] {
		letter-spacing: 0.3em;
	}
`;
