import "./style.css";

let filmIDList = [];
let filmIDWatchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

const homePage = document.querySelector("[data-home-page]");
const watchlistPage = document.querySelector("[data-watchlist-page");
const watchlistButton = document.querySelector("[data-watchlist-btn");
const homeButton = document.querySelector("[data-home-btn]");
const homeButton2 = document.querySelector("[data-home-btn-2");

const searchInput = document.querySelector("[data-search-input]");
const searchButton = document.querySelector("[data-search-btn]");
const filmListElement = document.querySelector("[data-film-list]");
const filmWatchlistElement = document.querySelector("[data-film-watchlist]");
const statusElement = document.querySelector("[data-status]");
const statusWatchlistElement = document.querySelector(
	"[data-status-watchlist]"
);

const getFilmIDList = async (searchText) => {
	searchText = searchText.trim().toLowerCase();

	try {
		const res = await fetch(
			`https://www.omdbapi.com/?apikey=ea2ff9e8&s=${searchText}`
		);
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		if (data.Response === "False") {
			statusElement.style.display = "";
			if (data.Error === "Too many results.") {
				statusElement.innerHTML = "Please enter more specific film's name";
			} else if (data.Error === "Movie not found!") {
				statusElement.innerHTML =
					"Cannot find the movie, please try another name";
			} else if (data.Error === "Incorrect IMDb ID.") {
				// Không xử lý vì đã hợp lí
			}
			return [];
		}

		return data.Search.map((film) => film.imdbID);
	} catch {
		console.error("Error fetching films:", error);
		throw error;
	}
};

const getFilmInfo = async (filmID) => {
	try {
		const res = await fetch(
			`https://www.omdbapi.com/?apikey=ea2ff9e8&i=${filmID}`
		);
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		const data = await res.json();
		return data;
	} catch {
		console.error("Error fetching film:", error);
		throw error;
	}
};

const renderFilms = async () => {
	const searchText = searchInput.value;

	statusElement.style.display = "none";
	searchButton.disabled = true;
	filmIDList = await getFilmIDList(searchText);
	searchButton.disabled = false;

	if (filmIDList.length === 0) {
		return;
	}

	const htmlArray = await Promise.all(
		filmIDList.map(async (id) => {
			const isInWatchList = filmIDWatchlist.includes(id);
			const { Title, Runtime, Genre, Plot, Poster, imdbRating } =
				await getFilmInfo(id);
			return `
                <li>
					<div class="film-container">
						<img class="film-poster" src="${Poster}" />
						<div class="film-info">
							<div class="film-title-rating">
								<p class="film-title">${Title}</p>
								<p class="film-rating">
									<span class="film-rating-icon"
										><i class="fa-solid fa-star"></i
									></span>
									${imdbRating}
								</p>
							</div>
							<div class="film-runtime-genre-watchlist">
								<p class="film-runtime">${Runtime}</p>
								<p class="film-genre">${Genre}</p>
								<button class="add-watchlist-btn" data-id="${id}" ${
				isInWatchList ? "disabled" : ""
			}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 50 50"
										fill="currentColor"
										class="add-watchlist-btn-icon"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z"
										/>
									</svg>
									Watchlist
								</button>
							</div>
							<p class="film-plot">${Plot}</p>
						</div>
					</div>
				</li>
            `;
		})
	);
	filmListElement.innerHTML = htmlArray.join("");
};
const renderWatchlist = async () => {
	if (filmIDWatchlist.length === 0) {
		statusWatchlistElement.style.display = "";
		return;
	}
	statusWatchlistElement.style.display = "none";

	const htmlArray = await Promise.all(
		filmIDWatchlist.map(async (id) => {
			const { Title, Runtime, Genre, Plot, Poster, imdbRating } =
				await getFilmInfo(id);
			return `
                <li>
					<div class="film-container">
						<img class="film-poster" src="${Poster}" />
						<div class="film-info">
							<div class="film-title-rating">
								<p class="film-title">${Title}</p>
								<p class="film-rating">
									<span class="film-rating-icon"
										><i class="fa-solid fa-star"></i
									></span>
									${imdbRating}
								</p>
							</div>
							<div class="film-runtime-genre-watchlist">
								<p class="film-runtime">${Runtime}</p>
								<p class="film-genre">${Genre}</p>
								<button class="remove-watchlist-btn" data-id="${id}">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="50"
										viewBox="0 0 50 50"
										fill="currentColor"
										class="remove-watchlist-btn-icon"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM15.625 21.875C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H15.625Z"
										/>
									</svg>
									Remove
								</button>
							</div>
							<p class="film-plot">${Plot}</p>
						</div>
					</div>
				</li>
            `;
		})
	);
	filmWatchlistElement.innerHTML = htmlArray.join("");
};

searchButton.addEventListener("click", renderFilms);
searchInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		renderFilms();
	}
});

filmListElement.addEventListener("click", (e) => {
	const addWatchlistButton = e.target.closest(".add-watchlist-btn");
	if (addWatchlistButton) {
		filmIDWatchlist.push(addWatchlistButton.dataset.id);
		// Add to local storage
		localStorage.setItem("watchlist", JSON.stringify(filmIDWatchlist));

		addWatchlistButton.disabled = true;
	}
});
filmWatchlistElement.addEventListener("click", (e) => {
	const removeWatchlistButton = e.target.closest(".remove-watchlist-btn");
	if (removeWatchlistButton) {
		filmIDWatchlist = filmIDWatchlist.filter(
			(id) => id != removeWatchlistButton.dataset.id
		);
		// Add to local storage
		localStorage.setItem("watchlist", JSON.stringify(filmIDWatchlist));

		e.target.closest("li").remove();
	}
});

watchlistButton.addEventListener("click", () => {
	homePage.classList.add("hidden");
	watchlistPage.classList.remove("hidden");
	renderWatchlist();
});
homeButton.addEventListener("click", () => {
	homePage.classList.remove("hidden");
	watchlistPage.classList.add("hidden");
	renderFilms();
});
homeButton2.addEventListener("click", () => {
	homePage.classList.remove("hidden");
	watchlistPage.classList.add("hidden");
	renderFilms();
});
