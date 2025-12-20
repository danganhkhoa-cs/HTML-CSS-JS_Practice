import path from "node:path";
import fs from "fs/promises";

import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatics(req, res, baseDir) {
	const dist = path.join(baseDir, "frontend", "dist");
	const filePath = path.join(dist, req.url === "/" ? "index.html" : req.url);

	try {
		const content = await fs.readFile(filePath);
		sendResponse(res, 200, getContentType(filePath), content);
	} catch (e) {
		if (e.code === "ENOENT") {
			sendResponse(
				res,
				404,
				"text/html",
				"<html><h1>Not found | 404</h1></html>"
			);
		} else {
			sendResponse(
				res,
				500,
				"text/html",
				`<html><h1>Server error: ${e}</h1></html>`
			);
		}
	}
}
