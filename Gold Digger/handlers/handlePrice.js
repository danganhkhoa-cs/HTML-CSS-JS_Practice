function roundTo(number, decimal) {
	const factor = Math.pow(10, decimal);
	return Math.round(number * factor) / factor;
}

export async function handlePrice(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/event-stream",
		Connection: "keep-alive",
		"Cache-Control": "no-cache",
	});

	const min = 500;
	const max = 10000;
	let price = 0;
	const intervalId = setInterval(() => {
		const sign = Math.random() < 0.5 ? -1 : 1;
		const step = sign * (Math.random() * 500);
		price = Math.max(min, Math.min(max, price + step));
		price = roundTo(price, 5);
		res.write(
			`data: ${JSON.stringify({
				event: "update-price",
				price: price,
			})}\n\n`
		);
	}, 1000);

	req.on("close", () => {
		clearInterval(intervalId);
	});
}
