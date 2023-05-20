import React from "react";

import { Wrapper, Project } from "./FifthSection.styles";

import Image1 from "../../images/Bitmap1.jpg";
import Image2 from "../../images/Bitmap2.jpg";
import Image3 from "../../images/Bitmap3.jpg";
import Image4 from "../../images/Bitmap4.jpg";

export default function FifthSection() {
	const projectData = [Image1, Image2, Image3, Image4];

	const Projects = projectData.map((value, index) => {
		return (
			<Project key={index} backgroundImage={`url(${value})`}></Project>
		);
	});

	return <Wrapper id="projects">{Projects}</Wrapper>;
}
