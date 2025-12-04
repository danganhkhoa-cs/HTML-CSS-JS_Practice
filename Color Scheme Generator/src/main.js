import "./style.css";
import "./theme.js";

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

let selectedMode = "";
let selectedColor = "#000000";

const colorInput = document.getElementById("color-input");
const modeInput = document.getElementById("mode-input");
const modeSelector = document.querySelector(".mode-selector");
const getSchemeButton = document.getElementById("get-scheme-btn");

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

const renderColorScheme = () => {
	fetch(
		`https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(
			1
		)}&mode=${selectedMode}&count=5`
	)
		.then((res) => res.json())
		.then((data) => {
			const colorObjectList = data.colors;
			const htmlText = colorObjectList
				.map(
					(color) => `
				<li>
					<div class="color-div">
						<div class="color" style="background-color:${color.hex.value}"></div>
						<p class="color-code">${color.hex.value.toUpperCase()}</p>
					</div>
				</li>
			`
				)
				.join("");
			document.querySelector(".output-list").innerHTML = htmlText;
		});
};

modeInput.addEventListener("click", (e) => {
	const isInsideList = e.target.closest(".mode-selector");
	if (isInsideList) {
		if (e.target.tagName === "INPUT") {
			//Set text to display
			const modeLabel = document.querySelector("#mode-input p");
			modeLabel.textContent = e.target.closest("label").textContent;

			//Bind mode to global variable
			selectedMode = e.target.value;

			//Hide selection menu
			modeSelector.classList.add("hidden");
		}
	} else {
		modeSelector.classList.toggle("hidden");
	}
});

colorInput.addEventListener("change", () => {
	selectedColor = colorInput.value;
});

getSchemeButton.addEventListener("click", renderColorScheme);
