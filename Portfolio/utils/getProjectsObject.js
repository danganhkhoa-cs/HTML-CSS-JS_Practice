import fs from "node:fs/promises";
import path from "node:path";

export async function getProjectsObject() {
	const projectsPath = path.join("data", "projects.json");

	try {
		const data = await fs.readFile(projectsPath, "utf-8");

		return JSON.parse(data);
	} catch (e) {
		throw new Error(`Failed to get projects: ${e}`);
	}
}
