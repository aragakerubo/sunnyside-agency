import styled from "styled-components";

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(2, 600px);

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 600px);

		.grid-item-2 {
			grid-area: 1 / 1 / span 1 / span 1;
		}

		.grid-item-1 {
			grid-area: 2 / 1 / span 1 / span 1;
		}

		.grid-item-3 {
			grid-area: 3 / 1 / span 1 / span 1;
		}

		.grid-item-4 {
			grid-area: 4 / 1 / span 1 / span 1;
		}
	}
`;
