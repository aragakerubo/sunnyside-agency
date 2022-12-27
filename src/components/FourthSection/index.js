import React from "react";

import {
	Wrapper,
	Heading,
	Container,
	Card,
	NameRole,
} from "./FourthSection.styles";

import Image1 from "../../images/image-emily.jpg";
import Image2 from "../../images/image-thomas.jpg";
import Image3 from "../../images/image-jennie.jpg";

export default function FourthSection() {
	const cardsData = [
		{
			image: Image1,
			text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
			name: "Emily R.",
			role: "Marketing Director",
		},
		{
			image: Image2,
			text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
			name: "Thomas S.",
			role: "Chief Operating Officer",
		},
		{
			image: Image3,
			text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
			name: "Jennie F.",
			role: "Business Owner",
		},
	];

	const Cards = cardsData.map((value, index) => {
		return (
			<Card key={index}>
				<img src={value.image} alt="profile" />
				<p>{value.text}</p>
				<NameRole>
					<h2>{value.name}</h2>
					<p>{value.role}</p>
				</NameRole>
			</Card>
		);
	});

	return (
		<Wrapper>
			<Heading>Client Testimonials</Heading>
			<Container>{Cards}</Container>
		</Wrapper>
	);
}
