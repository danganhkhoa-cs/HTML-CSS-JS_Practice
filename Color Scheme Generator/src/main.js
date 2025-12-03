import "./style.css";

const modeList = [
	"Monochrome",
	"Monochrome-dark",
	"Monochrome-light",
	"Analogic",
	"Complement",
	"Analogic-complement",
	"Triad",
	"Quad",
];

const modeInput = document.getElementById("mode-input");
const modeSelector = document.querySelector(".mode-selector");

const renderModes = (modeList) => {
	const htmlText = modeList
		.map(
			(mode) => `
        <li>
            <label class="flex items-center h-full p-2 select-none">
                ${mode}
                <input class="peer appearance-none" name="mode" type="radio" value="${mode.toLowerCase()}" />
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="hidden peer-checked:block ml-auto size-4"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m4.5 12.75 6 6 9-13.5" 
                    />
                </svg>

            </label>
        </li>
    `
		)
		.join("");
	modeSelector.innerHTML = htmlText;
};
renderModes(modeList);

modeInput.addEventListener("click", (e) => {
	const isInsideList = e.target.closest(".mode-selector");

	if (isInsideList) {
		if (e.target.tagName === "INPUT") {
			modeSelector.classList.add("hidden");

			const modeLabel = document.querySelector("#mode-input p");
			modeLabel.textContent = e.target.value;
		}
	} else {
		modeSelector.classList.toggle("hidden");
	}
});
