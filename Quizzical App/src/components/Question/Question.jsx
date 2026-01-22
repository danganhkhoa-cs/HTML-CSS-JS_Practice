import { useState } from "react";
import { nanoid } from "nanoid";
import { clsx } from "clsx";

import { Blob } from "./Blob";

import { shuffle } from "../../utils/shuffle.js";

export function Questions({ questions }) {
	// State value
	const [answers, setAnswers] = useState({});
	const [isChecked, setIsChecked] = useState(false);

	// Derived value
	const questionElements = questions.map(
		({ question, correct_answer, options }, index) => {
			const inputElements = options.map((option) => {
				const isChosen = answers[index] && answers[index] === option;

				const className = clsx(
					"question-answer",
					isChecked && {
						"correct-option": option === correct_answer,
						"incorrect-option": isChosen && option !== correct_answer,
					},
				);
				return (
					<label key={nanoid()} className={className}>
						<input
							name={index}
							type="radio"
							value={option}
							checked={isChosen}
							onChange={(e) => {
								setAnswers((prevAnswers) => ({
									...prevAnswers,
									[index]: e.target.value,
								}));
							}}
							disabled={isChecked}
						/>
						{option}
					</label>
				);
			});
			return (
				<li key={nanoid()}>
					<p className="question-title">{question}</p>
					<div className="question-answer-list">{inputElements}</div>
				</li>
			);
		},
	);

	// Functions
	function checkAnswer() {
		setIsChecked(true);
	}
	return (
		<section className="relative w-full z-0">
			<Blob />
			{/* Questions */}
			<div className="container">
				<ul className="question-list">{questionElements}</ul>
				<button
					onClick={checkAnswer}
					className="bg-[#4D5B9E] text-[#F5F7FB] text-[0.8rem] py-2 px-6 mt-5 rounded-[10px] font-medium cursor-pointer hover:bg-[#475289]"
				>
					Check answers
				</button>
			</div>
		</section>
	);
}
