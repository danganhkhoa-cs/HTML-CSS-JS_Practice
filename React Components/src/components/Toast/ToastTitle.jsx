import { useContext } from "react";
import { ToastContext } from "./Toast";

function ToastTitle({ children }) {
	const { type, textColorMap } = useContext(ToastContext);
	const className = `toast-title ${textColorMap[type][0]}`;
	return <div className={className}>{children}</div>;
}

export default ToastTitle;
