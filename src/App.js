import React from "react";

import { GlobalStyles } from "./GlobalStyles";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";

function App() {
	return (
		<div>
			<GlobalStyles />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
		</div>
	);
}

export default App;
