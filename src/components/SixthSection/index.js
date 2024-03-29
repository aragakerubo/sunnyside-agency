import React from "react";

import {
	Wrapper,
	ContainerTitle,
	Logo,
	Menu,
	ContainerSocials,
} from "./SixthSection.styles";

import LogoImg from "../../images/sunnysideLogo.svg";
import Facebook from "../../images/icon-facebook.svg";
import Instagram from "../../images/icon-instagram.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";

export default function SixthSection() {
	return (
		<Wrapper id="contact">
			<ContainerTitle>
				<Logo src={LogoImg} />
				<Menu>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
				</Menu>
			</ContainerTitle>
			<ContainerSocials>
				<li>
					<img src={Facebook} alt="Facebook" />
				</li>
				<li>
					<img src={Instagram} alt="Instagram" />
				</li>
				<li>
					<img src={Twitter} alt="Twitter" />
				</li>
				<li>
					<img src={Pinterest} alt="Pinterest" />
				</li>
			</ContainerSocials>
		</Wrapper>
	);
}
