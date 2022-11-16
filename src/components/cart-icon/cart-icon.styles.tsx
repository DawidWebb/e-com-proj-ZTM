import styled from "styled-components";
import { ReactComponent as ShoppinSvg } from "../../assets/shopping-bag.svg";

export const DivCardIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	div {
		width: 24px;
		height: 24px;
	}
`;

export const SpanItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`;

export const ShoppinIcon = styled(ShoppinSvg)`

`;
