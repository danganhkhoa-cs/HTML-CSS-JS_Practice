import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

function TooltipDesc({ children }) {
	const { style, color, colorMap } = useContext(TooltipContext);
	const className = `tooltip-desc ${colorMap[style][color].desc}`;
	return <div className={className}>{children}</div>;
}

export default TooltipDesc;
