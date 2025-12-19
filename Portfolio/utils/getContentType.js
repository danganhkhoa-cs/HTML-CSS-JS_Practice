import mime from "mime-types";

export function getContentType(filePath) {
	return mime.lookup(filePath) || "application/octet-stream";
}
