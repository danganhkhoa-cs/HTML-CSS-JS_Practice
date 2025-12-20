import { createServer } from "node:http";
import { serveStatics } from "./utils/serveStatics.js";
import { handleProjects } from "./routeHandlers/handleProjects.js";

const baseDir = import.meta.dirname;
const PORT = process.env.PORT || 8000;

const server = createServer(async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

	if (req.method === "GET") {
		if (req.url.startsWith("/data/projects")) {
			return await handleProjects(res, baseDir);
		} else {
			return await serveStatics(req, res, baseDir);
		}
	}
});

server.listen(PORT, () => {
	console.log(`Server live at port: ${PORT}`);
});
