export async function fetchQuestions() {
	try {
		const res = await fetch(
			"https://opentdb.com/api.php?amount=5&type=multiple",
		);

		if (!res.ok) {
			throw new Error("HTTPS FAIL!");
		}
		return res.json();
	} catch (e) {
		console.error(e);
	}
}
