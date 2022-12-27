import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 30px;
	padding: 60px 10px;
	background-image: url(${(props) => props.backgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const Heading = styled.h2`
	font-weight: 900;
	font-size: 28px;
	line-height: 35px;
	text-align: center;
	letter-spacing: -0.2px;
	color: ${(props) =>
		props.colour === "green" ? "var(--darkDesatCyan)" : "var(--darkBlue)"};
`;

export const Info = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 27px;
	text-align: center;
	letter-spacing: -0.11px;
	text-align: center;
	max-width: 340px;
	color: ${(props) =>
		props.colour === "green" ? "var(--darkDesatCyan)" : "var(--darkBlue)"};
`;
