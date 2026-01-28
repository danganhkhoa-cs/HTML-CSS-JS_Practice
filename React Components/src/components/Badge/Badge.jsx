function Badge({ children, type, color }) {
	const backgroundColorMap = {
		gray: "bg-[#F3F4F6]",
		red: "bg-[#FEE2E2]",
		yellow: "bg-[#FEF3C7]",
		green: "bg-[#D1FAE5]",
		blue: "bg-[#DBEAFE]",
		indigo: "bg-[#E0E7FF]",
		purple: "bg-[#EDE9FE]",
		pink: "bg-[#FCE7F3]",
	};
	const textColorMap = {
		gray: "text-[#1F2937]",
		red: "text-[#991B1B]",
		yellow: "text-[#92400E]",
		green: "text-[#065F46]",
		blue: "text-[#1E40AF]",
		indigo: "text-[#3730A3]",
		purple: "text-[#5B21B6]",
		pink: "text-[#9D174D]",
	};
	const typeMap = {
		square: "rounded-[4px]",
		spill: "rounded-[12px]",
	};

	const className = `badge ${typeMap[type]} ${backgroundColorMap[color]} ${textColorMap[color]} `;
	return <div className={className}>{children}</div>;
}

export default Badge;
