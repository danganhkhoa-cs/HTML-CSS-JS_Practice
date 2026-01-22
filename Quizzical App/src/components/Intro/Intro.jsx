import { Blob } from "./Blob";

export function Intro({ onStartGame }) {
	return (
		<section className="relative w-full min-h-[550px] flex flex-col items-center justify-center">
			<Blob />
			<h1 className="text-[2rem] font-bold text-[#293264]">Quizzical</h1>
			<h2 className="text-[#293264] max-w-96 text-center mt-2">
				5 random multiple-choice questions — think fast and see how many you get
				right! 🎯
			</h2>
			<button
				onClick={onStartGame}
				className="bg-[#4D5B9E] text-[#F5F7FB] py-3 px-12 mt-5 rounded-2xl cursor-pointer hover:bg-[#475289]"
			>
				Start quiz
			</button>
		</section>
	);
}
