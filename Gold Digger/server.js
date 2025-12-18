import http from "node:http";
import { serveStatic } from "./utils/serveStatics.js";
import { handlePrice } from "./handlers/handlePrice.js";

const PORT = 8000;

const baseDir = import.meta.dirname;

const server = http.createServer(async (req, res) => {
	if (req.headers.accept === "text/event-stream") {
		return await handlePrice(req, res);
	} else {
		return await serveStatic(req, res, baseDir);
	}
});

server.listen(PORT, () => {
	console.log(`Server run at PORT: ${PORT}`);
});
