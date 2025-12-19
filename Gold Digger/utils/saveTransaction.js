import path from "node:path";
import fs from "node:fs/promises";
import { roundTo } from "./roundTo.js";

export async function saveTransaction(investAmount, currentPrice, baseDir) {
	const date = new Date().toISOString();
	const goldAmount = roundTo(investAmount / currentPrice, 4);
	const filePath = path.join(baseDir, "data", "transaction.txt");

	try {
		let transactionData = await fs.readFile(filePath, "utf-8");
		transactionData += `${date}, amout paid: £${investAmount}, price per Oz: £${currentPrice}, gold sold: ${goldAmount} Oz\n`;
		await fs.writeFile(filePath, transactionData, "utf-8");
		return goldAmount;
	} catch (e) {
		throw Error(`Failed to save transaction: ${e}`);
	}
}
