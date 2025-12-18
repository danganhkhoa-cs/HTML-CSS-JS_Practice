import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
	if (req.url === "/home") {
		res.setHeader("Content-Type", "text/html");
		res.statusCode = 200;
		res.end("khoa");
	}
});

server.listen(PORT, () => {
	console.log(`Server run at PORT: ${PORT}`);
});
