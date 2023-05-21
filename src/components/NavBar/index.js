import React, { useState, useEffect, useRef } from "react";

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
	const menuRef = useRef(null);
	const navBarIconRef = useRef(null);

	function handleActive() {
		setActive((prevState) => !prevState);
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				navBarIconRef.current &&
				navBarIconRef.current.contains(event.target)
			) {
				return;
			}

			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setActive(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef, navBarIconRef]);

	return (
		<Wrapper>
			<Logo src={LogoImage} />
			<Container active={active}>
				<Triangle />
				<Nav ref={menuRef}>
					<li>
						<a href="#about" onClick={handleActive}>
							About
						</a>
					</li>
					<li>
						<a href="#services" onClick={handleActive}>
							Services
						</a>
					</li>
					<li>
						<a href="#projects" onClick={handleActive}>
							Projects
						</a>
					</li>
					<li className="contact-button">
						<a href="#contact" onClick={handleActive}>
							Contact
						</a>
					</li>
				</Nav>
			</Container>
			<BarIcon
				ref={navBarIconRef}
				src={BarIconImg}
				onClick={handleActive}
			/>
		</Wrapper>
	);
}
