import styled from "styled-components";

import firstSectionBackground from "../../images/mae-mu-1APtYqzNajA-unsplash.jpg";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 100px;
	height: 800px;
	min-height: 100vh;
	background-image: url(${firstSectionBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;
`;

export const Heading = styled.h1`
	padding: 0 30px;
	font-weight: 900;
	font-size: 56px;
	line-height: 69px;
	text-align: center;
	letter-spacing: 8.75px;
	text-transform: uppercase;
	color: var(--white);

	@media (max-width: 1000px) {
		padding: 0 10px;
		font-size: 40px;
		line-height: 49px;
		letter-spacing: 6.25px;
	}
`;

export const Arrow = styled.img`
	animation: bounce 2.5s infinite;

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-30px);
		}
		60% {
			transform: translateY(-15px);
		}
	}
`;
