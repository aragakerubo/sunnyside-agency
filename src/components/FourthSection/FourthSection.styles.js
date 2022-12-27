import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 80px;
	padding: 160px 0;

	@media (max-width: 1000px) {
		padding: 86px 15px;
	}
`;

export const Heading = styled.h2`
	font-weight: 900;
	font-size: 20px;
	line-height: 25px;
	text-align: center;
	letter-spacing: 5px;
	text-transform: uppercase;
	color: var(--grayishBlue);
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 30px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		gap: 65px;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 330px;
	max-width: 350px;

	img {
		width: 72px;
		border-radius: 50%;
	}

	p {
		font-weight: 600;
		font-size: 18px;
		line-height: 32px;
		text-align: center;
		letter-spacing: -0.13px;
		color: var(--veryDarkGrayBlue);
	}
`;

export const NameRole = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;

	h2 {
		font-weight: 900;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		letter-spacing: -0.13px;
		color: var(--veryDarkDesatBlue);
	}

	p {
		font-weight: 600;
		font-size: 14px;
		line-height: 25px;
		text-align: center;
		letter-spacing: -0.1px;
		color: var(--grayishBlue);
	}
`;
