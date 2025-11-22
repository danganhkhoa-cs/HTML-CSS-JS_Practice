import "./style.css";
import { menuArray } from "./data";

let orderedfoodList = [];
let totalPrice = 0;

const foodListElement = document.getElementById("food-list");
const orderedfoodListElement = document.getElementById("ordered-food-list");
const orderConfirmationElement = document.getElementById("order-confirmation");
const totalPriceElement = document.getElementById("total-price");

foodListElement.addEventListener("click", (e) => {
	if (e.target.closest(".add-btn")) {
		const addButton = e.target.closest(".add-btn");
		const foodId = addButton.dataset.foodId;
		let orderedFood = orderedfoodList.find((food) => food.id == foodId);
		if (orderedFood) {
			orderedFood.quantity++;
		} else {
			orderedFood = {
				id: foodId,
				name: addButton.dataset.foodName,
				price: addButton.dataset.foodPrice,
				quantity: 1,
			};
			orderedfoodList.push(orderedFood);
		}
		totalPrice += Number(addButton.dataset.foodPrice);

		renderOrderedFoodConfirmation(orderedfoodList, totalPrice);
	}
});

orderedfoodListElement.addEventListener("click", (e) => {
	if (e.target.closest(".remove-btn")) {
		const removeButton = e.target.closest(".remove-btn");
		const foodId = removeButton.dataset.foodId;
		const orderedFood = orderedfoodList.find((food) => food.id == foodId);
		if (orderedFood.quantity > 1) {
			orderedFood.quantity--;
		} else {
			orderedfoodList = orderedfoodList.filter((food) => food.id != foodId);
		}
		totalPrice -= Number(orderedFood.price);

		renderOrderedFoodConfirmation(orderedfoodList, totalPrice);
	}
});

const renderOrderedFoodConfirmation = (orderedfoodList, totalPrice) => {
	if (orderedfoodList.length === 0) {
		orderConfirmationElement.classList.add("hidden");
		return;
	} else {
		orderConfirmationElement.classList.remove("hidden");
	}
	const htmlFoodText = orderedfoodList
		.map(
			({ id, name, price, quantity }) => `
        <li class="ordered-item">
            <p class="ordered-name">${name}</p>
            <div class="remove-btn" data-food-id="${id}">remove</div>
            <p class="ordered-price">
                <span class="ordered-quantity">${quantity} x </span>$${price}
            </p>
        </li>
    `
		)
		.join("");
	orderedfoodListElement.innerHTML = htmlFoodText;

	totalPriceElement.textContent = totalPrice;
};

const renderFood = (menuArray) => {
	const htmlText = menuArray
		.map(
			({ name, ingredients, id, price, emoji }) => `
        <li id="${id}" class="item">
            <p class="emoji">${emoji}</p>
            <div class="description">
                <p class="name">${name}</p>
                <p class="ingredients">${ingredients.join(", ")}</p>
                <p class="price">$${price}</p>
            </div>
            <button class="add-btn" data-food-id="${id}" data-food-name="${name}" data-food-price="${price}">
                <i class="fa-solid fa-plus"></i>
            </button>
        </li>
    `
		)
		.join("");

	foodListElement.innerHTML = htmlText;
};
renderFood(menuArray);
