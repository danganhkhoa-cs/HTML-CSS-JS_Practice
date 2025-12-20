import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "../utils/sendResponse.js";
import { getContentType } from "../utils/getContentType.js";

export async function handleProjects(res, baseDir) {
	const filePath = path.join(baseDir, "data", "projects.json");

	try {
		const content = await fs.readFile(filePath, "utf-8");
		sendResponse(res, 200, getContentType(filePath), content);
	} catch (e) {
		if (e.code === "ENOENT") {
			sendResponse(
				res,
				404,
				"text/html",
				"<html><h1>Not found any project | 404</h1></html>"
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
