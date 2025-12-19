import "./price.js";

const investmentAmount = document.getElementById("investment-amount");
const form = document.querySelector("form");
const outputDialog = document.querySelector(".outputs");
const investSummary = document.getElementById("investment-summary");

const showConfirmation = (investAmount, goldAmount) => {
	investSummary.textContent = `You just bought ${goldAmount} ounces (ozt) for £${investAmount}. \n You will receive documentation shortly.`;
	outputDialog.showModal();
};

const hideConfirmation = () => {
	outputDialog.close();
};

const investGold = async (investAmount) => {
	const res = await fetch("http://localhost:8000/invest", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ investAmount: investAmount }),
	});
	const data = await res.json();
	showConfirmation(investAmount, data.goldAmount);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	investGold(investmentAmount.value);
});

outputDialog.addEventListener("click", (e) => {
	if (e.target.closest("button")) {
		hideConfirmation();
	}
});
