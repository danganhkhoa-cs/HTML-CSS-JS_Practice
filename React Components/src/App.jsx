import { useState } from "react";

import Header from "./components/Header";
import BadgeSection from "./components/Badge/BadgeSection";
import BannerSection from "./components/Banner/BannerSection";
import ToastSection from "./components/Toast/ToastSection";
import TooltipSection from "./components/Tooltip/TooltipSection";

function App() {
	return (
		<div className="global-layout">
			<Header />
			<BadgeSection />
			<BannerSection />
			<ToastSection />
			<TooltipSection />
		</div>
	);
}

export default App;
