import { useContext } from "react";
import { BannerContext } from "./Banner";

function BannerDesc({ children }) {
	const { textColorMap, type } = useContext(BannerContext);
	const className = `banner-desc ${textColorMap[type][1]}`;
	return <div className={className}>{children}</div>;
}

export default BannerDesc;
