import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./getContentType.js";
import { sendResponse } from "./sendResponse.js";

export async function serveStatic(req, res, baseDir) {
	const filePath = path.join(
		baseDir,
		"public",
		req.url === "/" ? "index.html" : req.url
	);

	const contentType = getContentType(path.extname(filePath));

	try {
		const content = await fs.readFile(filePath);
		sendResponse(res, 200, contentType, content);
	} catch (e) {
		if (e.code === "ENOENT") {
			const content = await fs.readFile(
				path.join(baseDir, "public", "404.html")
			);
			sendResponse(res, 404, "text/html", content);
		} else {
			sendResponse(
				res,
				500,
				"text/html",
				`
                <html><h1>Server error: ${e.code}</h1></html>
            `
			);
		}
	}
}
