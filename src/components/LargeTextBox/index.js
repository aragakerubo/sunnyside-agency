import React from "react";

import {
	Wrapper,
	Container,
	Heading,
	Info,
	Learn,
} from "./LargeTextBox.styles";

export default function LargeTextBox(props) {
	return (
		<Wrapper className={props.className}>
			<Container>
				<Heading>{props.heading}</Heading>
				<Info>{props.info}</Info>
				<Learn highlightColour={props.highlightColour}>
					<h2>Learn More</h2>
					<div></div>
				</Learn>
			</Container>
		</Wrapper>
	);
}
