import { createServer } from "node:http";
import { serveStatics } from "./utils/serveStatics.js";

const baseDir = import.meta.dirname;
const PORT = process.env.PORT || 8000;

const server = createServer(async (req, res) => {
	if (req.method === "GET") {
		return await serveStatics(req, res, baseDir);
	}
});

server.listen(PORT, () => {
	console.log(`Server live at port: ${PORT}`);
});
