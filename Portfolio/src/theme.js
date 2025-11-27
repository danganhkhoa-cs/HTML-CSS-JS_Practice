const toggleThemeButton = document.getElementById("toggle-theme");

// Xác định trạng thái dark hiện tại
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark =
	localStorage.theme === "dark" || (!("theme" in localStorage) && prefersDark);

// Đặt class dark lên html và đồng bộ checkbox
document.documentElement.classList.toggle("dark", isDark);
toggleThemeButton.checked = isDark;

// Lắng nghe khi checkbox thay đổi
toggleThemeButton.addEventListener("change", () => {
	document.documentElement.classList.toggle("dark", toggleThemeButton.checked);
	localStorage.theme = toggleThemeButton.checked ? "dark" : "light";
});
