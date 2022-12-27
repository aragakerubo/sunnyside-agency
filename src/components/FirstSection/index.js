import React from "react";

import { Wrapper, Heading, Arrow } from "./FirstSection.styles";
import NavBar from "../NavBar";
import arrowIcon from "../../images/icon-arrow-down.svg";

export default function FirstSection() {
	return (
		<Wrapper>
			<NavBar />
			<Heading>We are creatives</Heading>
			<Arrow src={arrowIcon} />
		</Wrapper>
	);
}
