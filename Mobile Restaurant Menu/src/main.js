import "./style.css";
import { menuArray } from "./data";

let orderedfoodList = [];
let totalPrice = 0;

const foodListElement = document.getElementById("food-list");
const orderedfoodListElement = document.getElementById("ordered-food-list");
const orderConfirmationElement = document.getElementById("order-confirmation");
const orderButton = document.getElementById("order-btn");
const totalPriceElement = document.getElementById("total-price");
const cardModal = document.getElementById("card-modal");
const cardModalContent = document.getElementById("card-modal-content");
const modalName = document.getElementById("modal-name");
const modalCardNumber = document.getElementById("modal-card-number");
const modalCVV = document.getElementById("modal-cvv");
const cardForm = document.getElementById("card-form");
const confirmationMessageDiv = document.getElementById("confirmation-message");
const confirmationMessage = document.querySelector("#confirmation-message p");

orderButton.addEventListener("click", () => {
	cardModal.style.display = "block";
});

cardModalContent.addEventListener("click", (e) => {
	if (e.target.closest("#modal-cancel")) {
		cardModal.style.display = "none";
	} else if (e.target.closest("#modal-submit")) {
		if (cardForm.checkValidity()) {
			e.preventDefault();
			resetOrderedFoodList();
			cardModal.style.display = "none";
			confirmationMessageDiv.style.display = "block";
			confirmationMessage.textContent = `Thanks, ${modalName.value}! Your order is on its way!`;
			resetModal();
		}
	}
});

window.onclick = (e) => {
	if (e.target == cardModal) {
		cardModal.style.display = "none";
	}
};

const resetModal = () => {
	modalName.value = "";
	modalCardNumber.value = "";
	modalCVV.value = "";
};

const resetOrderedFoodList = () => {
	orderedfoodList = [];
	renderOrderedFoodConfirmation(orderedfoodList);
};

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
		orderConfirmationElement.style.display = "none";
		totalPrice = 0;
		return;
	}
	confirmationMessageDiv.style.display = "none";
	orderConfirmationElement.style.display = "block";

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
