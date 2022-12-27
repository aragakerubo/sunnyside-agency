import styled from "styled-components";

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 600px;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 600px);
	}
`;
