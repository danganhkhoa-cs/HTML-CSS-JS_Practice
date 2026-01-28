import { createContext } from "react";
import { backgroundColorMap, textColorMap, iconMap } from "./data";

export const ToastContext = createContext();

function Toast({ children, type }) {
	const className = `toast-container ${backgroundColorMap[type]}`;

	return (
		<ToastContext.Provider value={{ type, textColorMap }}>
			<div className={className}>
				<span className="mt-px">{iconMap[type]}</span>
				<div>{children}</div>
			</div>
		</ToastContext.Provider>
	);
}

export default Toast;
