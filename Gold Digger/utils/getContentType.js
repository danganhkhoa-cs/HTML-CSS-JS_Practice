export function getContentType(extension) {
	const typeOf = {
		".js": "text/javascript",
		".html": "text/html",
		".css": "text/css",
		".json": "application/json",
		".png": "image/png",
	};
	return typeOf[extension] || "text/plain";
}
