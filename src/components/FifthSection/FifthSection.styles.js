import styled from "styled-components";

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 450px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 450px);
	}

	@media (max-width: 500px) {
		grid-template-rows: repeat(2, 190px);
	}
`;

export const Project = styled.div`
	background-image: ${(props) => props.backgroundImage};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
