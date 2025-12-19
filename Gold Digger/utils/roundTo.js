export function roundTo(number, decimal) {
	const factor = Math.pow(10, decimal);
	return Math.round(number * factor) / factor;
}
