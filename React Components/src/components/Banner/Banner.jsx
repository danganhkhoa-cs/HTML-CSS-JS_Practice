import { createContext, useState } from "react";

import { backgroundColorMap, textColorMap, iconMap } from "./data";

export const BannerContext = createContext();

function Banner({ children, type }) {
	const className = `banner-container ${backgroundColorMap[type]}`;
	return (
		<BannerContext.Provider value={{ textColorMap, type }}>
			<div className={className}>
				<span className="mt-1">{iconMap[type]}</span>
				<div>{children}</div>
			</div>
		</BannerContext.Provider>
	);
}

export default Banner;
