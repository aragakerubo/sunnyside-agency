import React from "react";

import { Wrapper } from "./ThirdSection.styles";
import LargePicture from "../LargePicture";

import { Heading3, Info3, Heading4, Info4 } from "../../data";

import backgroundImage3 from "../../images/mae-mu-vbAEHCrvXZ0-unsplash.jpg";
import backgroundImage4 from "../../images/mae-mu-U1iYwZ8Dx7k-unsplash.jpg";

export default function ThirdSection() {
	return (
		<Wrapper>
			<LargePicture
				backgroundImage={backgroundImage3}
				heading={Heading3}
				info={Info3}
				colour="green"
			/>
			<LargePicture
				backgroundImage={backgroundImage4}
				heading={Heading4}
				info={Info4}
				colour="blue"
			/>
		</Wrapper>
	);
}
