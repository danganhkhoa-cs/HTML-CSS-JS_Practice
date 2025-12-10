const toggleThemeButton = document.querySelector("[data-toggle-theme-btn]");

// Xác định trạng thái dark hiện tại
const prefersDark = window.matchMedia("prefers-color-scheme: dark").matches;
const isDark = localStorage.theme === "dark" || prefersDark;

// Đặt class dark theo trạng thái hiện tại
document.documentElement.classList.toggle("dark", isDark);
toggleThemeButton.checked = isDark;

// Thiết lập lắng nghe sự kiện
toggleThemeButton.addEventListener("change", () => {
	document.documentElement.classList.toggle("dark", toggleThemeButton.checked);
	localStorage.theme = toggleThemeButton.checked ? "dark" : "light";
});
