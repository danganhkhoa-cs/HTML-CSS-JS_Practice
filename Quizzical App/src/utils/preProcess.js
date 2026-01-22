import { decode } from "html-entities";
import { shuffle } from "./shuffle";

export function preProcess(results) {
	return results.map((result) => {
		const correct_answer = decode(result.correct_answer);
		const incorrect_answers = result.incorrect_answers.map((inAns) =>
			decode(inAns),
		);
		return {
			question: decode(result.question),
			correct_answer: correct_answer,
			options: shuffle([...incorrect_answers, correct_answer]),
		};
	});
}
