const eventSource = new EventSource("/");
const priceDisplay = document.getElementById("price-display");
priceDisplay.textContent = 500;

eventSource.onmessage = (event) => {
	const data = JSON.parse(event.data);
	const price = data.price;
	priceDisplay.textContent = price;
};
eventSource.onerror = () => {
	console.log("Error...");
};
