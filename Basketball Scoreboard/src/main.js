import "/src/style.css";

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

const homePlusOneBtn = document.getElementById("home-plus-one-point");
const homePlusTwoBtn = document.getElementById("home-plus-two-point");
const homePlusThreeBtn = document.getElementById("home-plus-three-point");
const guestPlusOneBtn = document.getElementById("guest-plus-one-point");
const guestPlusTwoBtn = document.getElementById("guest-plus-two-point");
const guestPlusThreeBtn = document.getElementById("guest-plus-three-point");

homePlusOneBtn.addEventListener("click", () => {
  homeScore.textContent = parseInt(homeScore.textContent) + 1;
});
homePlusTwoBtn.addEventListener("click", () => {
  homeScore.textContent = parseInt(homeScore.textContent) + 2;
  console.log(homeScore);
});
homePlusThreeBtn.addEventListener("click", () => {
  homeScore.textContent = parseInt(homeScore.textContent) + 3;
});

guestPlusOneBtn.addEventListener("click", () => {
  guestScore.textContent = parseInt(guestScore.textContent) + 1;
});
guestPlusTwoBtn.addEventListener("click", () => {
  guestScore.textContent = parseInt(guestScore.textContent) + 2;
});
guestPlusThreeBtn.addEventListener("click", () => {
  guestScore.textContent = parseInt(guestScore.textContent) + 3;
});
