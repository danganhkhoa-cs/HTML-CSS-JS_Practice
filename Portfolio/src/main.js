import "./style.css";
import "./theme.js";

const navigationToggle = document.getElementById("navigation-toggle");
const navigationMobile = document.getElementById("navigation-mobile");
const navigationBackdrop = document.getElementById("navigation-backdrop");

// Navigation toggle logic
const closeNavigationMenu = () => {
	navigationToggle.checked = false;
	navigationBackdrop.style.display = "none";
};
navigationToggle.addEventListener("change", () => {
	navigationToggle.checked
		? (navigationBackdrop.style.display = "block")
		: (navigationBackdrop.style.display = "none");
});
navigationMobile.addEventListener("click", closeNavigationMenu);
navigationBackdrop.addEventListener("click", closeNavigationMenu);
