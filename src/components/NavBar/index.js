import React, { useState } from "react";

import {
	Wrapper,
	Logo,
	Nav,
	BarIcon,
	Container,
	Triangle,
} from "./NavBar.styles";
import LogoImage from "../../images/logo.svg";
import BarIconImg from "../../images/icon-hamburger.svg";

export default function NavBar() {
	const [active, setActive] = useState(false);

	function handleActive() {
		setActive((prevState) => !prevState);
	}

	return (
		<Wrapper>
			<Logo src={LogoImage} />
			<Container active={active}>
				<Triangle />
				<Nav active={active}>
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
					<li className="contact-button">Contact</li>
				</Nav>
			</Container>
			<BarIcon src={BarIconImg} onClick={handleActive} />
		</Wrapper>
	);
}
