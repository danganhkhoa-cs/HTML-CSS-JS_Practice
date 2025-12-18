import http from "node:http";
import { serveStatic } from "./utils/serveStatics.js";

const PORT = 8000;

const baseDir = import.meta.dirname;

const server = http.createServer(async (req, res) => {
	return await serveStatic(req, res, baseDir);
});

server.listen(PORT, () => {
	console.log(`Server run at PORT: ${PORT}`);
});
