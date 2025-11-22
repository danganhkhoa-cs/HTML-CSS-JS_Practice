import "./style.css";
import { menuArray } from "./data";

const foodList = document.getElementById("food-list");

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
            <button class="add-btn" data-food-id="${id}">
                <i class="fa-solid fa-plus"></i>
            </button>
        </li>
    `
		)
		.join("<div class='divider'></div>");

	foodList.innerHTML = htmlText;
};

renderFood(menuArray);
