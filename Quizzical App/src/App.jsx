import { useState } from "react";
import { fetchQuestions } from "./utils/fetchQuestions";
import { Intro } from "./components/Intro/Intro";
import { Questions } from "./components/Question/Question";
import { useQuery } from "@tanstack/react-query";
import { preProcess } from "./utils/preProcess";

function App() {
	const [isStartQuiz, setisStartQuiz] = useState(false);
	const { data } = useQuery({
		queryKey: ["questions"],
		queryFn: fetchQuestions,
		retry: true,
	});

	return (
		<div className="w-[550px] bg-[#F5F7FB] scale-150">
			{!isStartQuiz && (
				<Intro
					onStartGame={() => {
						setisStartQuiz(true);
					}}
				/>
			)}
			{isStartQuiz && data && (
				<Questions questions={preProcess(data.results)} />
			)}
		</div>
	);
}
export default App;
