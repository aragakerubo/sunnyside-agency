import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 40px;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 30px 25px;
	}
`;

export const Logo = styled.img`
	height: 30px;
`;

export const Container = styled.div`
	@media (max-width: 1000px) {
		position: absolute;
		display: ${(props) => (props.active ? "flex" : "none")};
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		min-width: 330px;
		top: 75px;
		right: 30px;
		z-index: 10;
	}

	@media (max-width: 450px) {
		max-width: 330px;
		right: 0;
		left: 0;
		margin-right: auto;
		margin-left: auto;
	}

	@media (max-width: 375px) {
		min-width: 290px;
		max-width: 290px;
	}
`;

export const Nav = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	list-style: none;
	padding: 0;
	margin: 0;
	gap: 45px;

	li {
		display: flex;
	}

	li a {
		font-family: "Barlow";
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 25px;
		letter-spacing: -0.13px;
		color: var(--white);
		cursor: pointer;
	}

	li a:hover,
	li a:active,
	li a:focus {
		color: var(--white);
	}

	li.contact-button a {
		font-family: "Fraunces", Garamond, serif;
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		color: var(--veryDarkDesatBlue);
		line-height: 25px;
		padding: 15px 30px;
		letter-spacing: -0.107px;
		text-transform: uppercase;
		background-color: var(--white);
		border-radius: 28px;
	}

	li.contact-button a:hover {
		color: var(--white);
		background-color: var(--whiteDesat);
	}

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		width: 100%;
		padding: 40px 0;
		background-color: var(--white);

		li a {
			color: var(--grayishBlue);
		}

		li a:hover,
		li a:active,
		li a:focus {
			color: var(--grayishBlue);
		}

		li.contact-button a {
			color: var(--veryDarkDesatBlue);
			background-color: var(--yellow);
		}

		li.contact-button a:hover {
			color: var(--veryDarkDesatBlue);
			background-color: var(--yellow);
		}
	}
`;

export const Triangle = styled.div`
	display: none;

	@media (max-width: 1000px) {
		display: block;
		width: 0;
		height: 0;
		border-top: 24px solid transparent;
		border-right: 24px solid var(--white);
		border-bottom: 0 solid transparent;
	}
`;

export const BarIcon = styled.img`
	display: none;

	@media (max-width: 1000px) {
		display: block;
		width: 24px;

		&:hover,
		&:focus,
		&:active {
			filter: brightness(90%);
		}
	}
`;
