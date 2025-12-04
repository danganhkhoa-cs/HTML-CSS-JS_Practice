const toggleThemeButton = document.getElementById("theme-toggle");

// Xác định trạng thái hiện tại
const prefersDark = window.matchMedia("(prefer-color-scheme: dark)").matches;
let isDark = localStorage.theme === "dark" || prefersDark;

// Thiết lập trạng thái
document.documentElement.classList.toggle("dark", isDark);
toggleThemeButton.checked = isDark;

// Thiết lập lắng nghe sự kiện
toggleThemeButton.addEventListener("change", () => {
	isDark = !isDark;
	document.documentElement.classList.toggle("dark", toggleThemeButton.checked);
	localStorage.theme = toggleThemeButton.checked ? "dark" : "light";
});
