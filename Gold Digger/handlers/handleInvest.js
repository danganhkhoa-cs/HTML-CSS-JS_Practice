import { parseJSONBody } from "../utils/parseJSONBody.js";
import { saveTransaction } from "../utils/saveTransaction.js";
import { sendResponse } from "../utils/sendResponse.js";
import { getCurrentPrice } from "./handlePrice.js";

export async function handleInvest(req, res, baseDir) {
	try {
		const data = await parseJSONBody(req);
		const investAmount = data.investAmount;
		const currentPrice = getCurrentPrice();

		const goldAmount = await saveTransaction(
			investAmount,
			currentPrice,
			baseDir
		);

		sendResponse(
			res,
			201,
			"application/json",
			JSON.stringify({
				goldAmount: goldAmount,
			})
		);
	} catch (e) {
		console.error(e);
	}
}
