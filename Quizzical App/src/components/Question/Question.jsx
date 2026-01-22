import { useState } from "react";
import { nanoid } from "nanoid";
import { clsx } from "clsx";
import { ClipLoader } from "react-spinners";

import { Blob } from "./Blob";

export function Questions({ questions, refetchQuestions }) {
	// State value
	const [isLoading, setIsloading] = useState(false);
	const [answers, setAnswers] = useState({});
	const [isChecked, setIsChecked] = useState(false);

	// Derived value
	const correctAnswersCount = Object.values(answers).reduce(
		(count, ans, index) =>
			ans === questions[index].correct_answer ? count + 1 : count,
		0,
	);
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
	async function playAgain() {
		setIsloading(true);
		await refetchQuestions();
		setIsChecked(false);
		setAnswers({});
		setIsloading(false);
	}
	function renderActionButton() {
		if (isChecked) {
			if (isLoading) {
				return <ClipLoader loading={true} color={"#4D5B9E"} />;
			} else {
				return (
					<>
						<p>You scored {correctAnswersCount}/5 correct answers</p>
						<button
							onClick={playAgain}
							className="bg-[#4D5B9E] text-[#F5F7FB] text-[0.8rem] py-2 px-8 rounded-[10px] font-medium cursor-pointer hover:bg-[#475289]"
						>
							Play again
						</button>
					</>
				);
			}
		} else {
			return (
				<button
					onClick={checkAnswer}
					className="bg-[#4D5B9E] text-[#F5F7FB] text-[0.8rem] py-2 px-6 rounded-[10px] font-medium cursor-pointer hover:bg-[#475289]"
				>
					Check answers
				</button>
			);
		}
	}
	return (
		<section className="relative w-full z-0">
			<Blob />
			{/* Questions */}
			<div className="container">
				<ul className="question-list">{questionElements}</ul>
				<div className="flex items-center justify-center mt-5 gap-3">
					{renderActionButton()}
				</div>
			</div>
		</section>
	);
}
