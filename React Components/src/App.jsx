import { useState } from "react";

import Header from "./components/Header";
import BadgeSection from "./components/Badge/BadgeSection";
import BannerSection from "./components/Banner/BannerSection";
import ToastSection from "./components/Toast/ToastSection";
import TooltipSection from "./components/Tooltip/TooltipSection";
import TestimonialSection from "./components/Testimonial/TestimonialSection";
import CardSection from "./Cards/CardSection";

function App() {
	return (
		<div className="global-layout">
			<Header />
			<BadgeSection />
			<BannerSection />
			<ToastSection />
			<TooltipSection />
			<TestimonialSection />
			<CardSection />
		</div>
	);
}

export default App;
