import { getProjectsObject } from "../utils/getProjectsObject.js";

export async function getAllProjects(req, res) {
	try {
		const projects = await getProjectsObject();

		await res.json(projects);
	} catch (e) {
		console.error(e);
		await res.status(500).json({ error: "Failed to fetch projects." });
	}
}
