import React from "react";

import { Wrapper, Heading, Info } from "./LargePicture.styles";

export default function LargePicture(props) {
	return (
		<Wrapper
			backgroundImage={props.backgroundImage}
			className={props.className}
		>
			{props.heading && (
				<Heading colour={props.colour}>{props.heading}</Heading>
			)}
			{props.info && <Info colour={props.colour}>{props.info}</Info>}
		</Wrapper>
	);
}
