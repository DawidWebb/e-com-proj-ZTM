import styled from "styled-components";

export const DivCheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const DivImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;
export const SpanValue = styled.span`
	margin: 0 10px;
`;
export const SpanQuantity = styled.span`
	display: flex;
	width: 23%;
`;
export const SpanName = styled.span`
	margin: 0 10px;
	width: 23%;
`;

export const DivArrow = styled.div`
	cursor: pointer;
`;

export const DivRemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
