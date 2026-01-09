import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";

export const App = () => (
	<div className="relative w-screen h-screen bg-[#23252c] flex items-center justify-center gap-10">
		<div className="flex flex-col justify-between w-79.25 h-195 bg-primary rounded-xl overflow-hidden font-['Inter',sans-serif] text-text">
			<Header />
			<Main />
			<Footer />
		</div>
		<div className="flex flex-col justify-between w-79.25 h-195 dark bg-primary rounded-xl overflow-hidden font-['Inter',sans-serif] text-text">
			<Header />
			<Main />
			<Footer />
		</div>
	</div>
);
