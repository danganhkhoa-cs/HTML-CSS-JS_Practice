export function sendResponse(res, statusCode, contentType, content) {
	res.writeHeader(statusCode, {
		"Content-Type": contentType,
	});
	res.end(content);
}
