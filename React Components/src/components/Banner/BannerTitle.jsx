import { useContext } from "react";
import { BannerContext } from "./Banner";

function BannerTitle({ children }) {
	const { textColorMap, type } = useContext(BannerContext);
	const className = `banner-title ${textColorMap[type][0]}`;
	return <div className={className}>{children}</div>;
}

export default BannerTitle;
