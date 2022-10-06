import { allItems } from "src/assets/items-data/allItems";
import { cart } from "src/assets/items-data/cart";
import { favorites } from "src/assets/items-data/favorites";

export function changeItemFavoriteStatus(item: any, orientation: any, index: number): void {
	const favoriteButtons = document.querySelectorAll('.favorite-btn');
	const icon = favoriteButtons[index].children[0];
	const text = favoriteButtons[index].children[1];

	if (orientation === "horizontal") {
		if (icon.className.includes("k-i-favorite-outline")) {
			icon.className = icon.className.replace("k-i-favorite-outline", "k-i-favorite");
		} else {
			icon.className = icon.className.replace("k-i-favorite", "k-i-favorite-outline");
		}
	} else {
		if (icon.className.includes("k-i-favorite-outline")) {
			icon.className = icon.className.replace("k-i-favorite-outline", "k-i-favorite");
			text.textContent = "Remove from favorites";
		} else {
			icon.className = icon.className.replace("k-i-favorite", "k-i-favorite-outline");
			text.textContent = "Add to favorites";
		}
	}

	if (item.favorite) {
		item.favorite = false;
		favorites.splice(index, 1);
	} else {
		item.favorite = true;
		favorites.push(item);
	}
}

export function changeItemCartStatus(item: any, index: number): void {
	const cartButtons = document.querySelectorAll('.cart-btn');
	const text = cartButtons[index].children[1];

	if (text.textContent === "Add to cart") {
		text.textContent = "Added to cart";
	} else {
		text.textContent = "Add to cart";
	}

	if (item.quantity > 0) {
		item.quantity = 0;
		cart.splice(index, 1);
	} else {
		item.quantity = 1;
		cart.push(item);
	}
}

export function allProductsArray() {
	let concatAllItems: any = [];
	const categoryItems = Object.values(allItems[0]);

	categoryItems.forEach(x => {
		const subCategoryItems = Object.values(x);
		subCategoryItems.forEach(arr => {
			concatAllItems.push(...arr);
		});
	});

	return concatAllItems;
}
