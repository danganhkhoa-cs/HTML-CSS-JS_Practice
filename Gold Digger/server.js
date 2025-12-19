import http from "node:http";
import { serveStatic } from "./utils/serveStatics.js";
import { handlePrice } from "./handlers/handlePrice.js";
import { handleInvest } from "./handlers/handleInvest.js";

const PORT = 8000;

const baseDir = import.meta.dirname;

const server = http.createServer(async (req, res) => {
	if (req.method === "GET") {
		if (req.headers.accept === "text/event-stream") {
			return await handlePrice(req, res);
		} else {
			return await serveStatic(req, res, baseDir);
		}
	} else if (req.method === "POST") {
		if (req.url === "/invest") {
			return await handleInvest(req, res, baseDir);
		}
	}
});

server.listen(PORT, () => {
	console.log(`Server run at PORT: ${PORT}`);
});
