import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

function TooltipTitle({ children }) {
	const { style, color, colorMap } = useContext(TooltipContext);
	const className = `tooltip-title ${colorMap[style][color].title}`;
	return <div className={className}>{children}</div>;
}

export default TooltipTitle;
