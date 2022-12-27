import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 35px;
	padding: 0 24px;
	max-width: 440px;

	@media (max-width: 1000px) {
		align-items: center;
	}
`;

export const Heading = styled.h2`
	font-weight: 900;
	font-size: 40px;
	line-height: 49px;
	letter-spacing: -0.29px;
	color: var(--veryDarkDesatBlue);

	@media (max-width: 1000px) {
		font-size: 32px;
		line-height: 39px;
		text-align: center;
		letter-spacing: -0.23px;
	}
`;

export const Info = styled.p`
	font-weight: 600;
	font-size: 18px;
	line-height: 30px;
	letter-spacing: -0.13px;
	color: var(--veryDarkGrayBlue);

	@media (max-width: 1000px) {
		text-align: center;
	}
`;

export const Learn = styled.div`
	position: relative;
	padding: 0 9px;
	cursor: pointer;

	h2 {
		font-size: 15px;
		line-height: 25px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: var(--veryDarkDesatBlue);
	}

	div {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 10px;
		border-radius: 28px;
		opacity: 0.25;
		z-index: -10;
		background-color: ${(props) =>
			props.highlightColour === "yellow"
				? "var(--yellow)"
				: "var(--softRed)"};
	}

	&:hover {
		div {
			opacity: 1;
		}
	}
`;
