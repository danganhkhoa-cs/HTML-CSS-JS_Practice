import { useContext } from "react";
import { ToastContext } from "./Toast";

function ToastDesc({ children }) {
	const { type, textColorMap } = useContext(ToastContext);
	const className = `toast-desc ${textColorMap[type][1]}`;
	return <div className={className}>{children}</div>;
}

export default ToastDesc;
