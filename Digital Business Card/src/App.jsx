import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Footer } from "./components/Footer.jsx";

export const App = () => (
	<div className="w-screen h-screen bg-[#23252c] flex items-center justify-center">
		<div className="flex flex-col justify-between w-79.25 h-195 bg-[#f5f5f5] rounded-xl overflow-hidden font-['Inter',sans-serif] text-[#4A4E74]">
			<Header />
			<Main />
			<Footer />
		</div>
	</div>
);
