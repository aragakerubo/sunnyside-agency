import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 88px;
	padding: 72px 0;
	background-color: var(--darkModCyan);
`;

export const ContainerTitle = styled(Wrapper)`
	gap: 40px;
	padding: 0;
`;

export const Logo = styled.img``;

export const Menu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 57px;
	padding: 0;
	margin: 0;

	li {
		display: flex;
	}

	li a {
		list-style: none;
		font-family: "Barlow";
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 25px;
		letter-spacing: -0.13px;
		opacity: 0.65;
		color: var(--darkDesatCyan);
		cursor: pointer;
	}

	li a:hover,
	li a:active,
	li a:focus {
		color: var(--white);
	}
`;

export const ContainerSocials = styled(Menu)`
	gap: 28px;

	li {
		img:hover {
			filter: brightness(0) invert(1);
		}
	}
`;
