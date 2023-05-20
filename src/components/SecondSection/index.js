import React from "react";

import { Wrapper } from "./SecondSection.styles";
import LargePicture from "../LargePicture";
import LargeTextBox from "../LargeTextBox";

import { Heading1, Info1, Heading2, Info2 } from "../../data";

import backgroundImage1 from "../../images/mae-mu-40NjbC-Q-cw-unsplash.jpg";
import backgroundImage2 from "../../images/mae-mu-GnWKTJlMYsQ-unsplash.jpg";

export default function SecondSection() {
	return (
		<Wrapper id="about">
			<LargeTextBox
				heading={Heading1}
				info={Info1}
				highlightColour="yellow"
				className="grid-item-1"
			/>
			<LargePicture
				backgroundImage={backgroundImage1}
				className="grid-item-2"
			/>
			<LargePicture
				backgroundImage={backgroundImage2}
				className="grid-item-3"
			/>
			<LargeTextBox
				heading={Heading2}
				info={Info2}
				highlightColour="red"
				className="grid-item-4"
			/>
		</Wrapper>
	);
}
