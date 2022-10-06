export interface ShoppingCartCard {
	id: number;
	url: string;
	title: string;
	price: number;
	quantity: number;
}

export interface SimilarProductsCard {
	id: number;
	url: string;
	title: string;
	stars: number;
	price: number;
}

export interface FavoriteCard {
	id: number;
	url: string;
	title: string;
	stars: number;
	description: string;
	price: number;
}

export interface dropdownListItems {
	id: number;
	url: string;
	title: string;
}

export interface RecentlyViewedCard {
	id: number;
	title: string;
	url: string;
	price: number;
}

export interface TopPicksCard {
	id: number;
	title: string;
	url: string;
}

export interface ProductCard {
	id: number | string;
	title: string;
	model: string;
	url: string;
	color: string;
	price: number;
	stars: number;
	description: string;
	size: string | number;
	discountedPercents: number;
	isChecked: boolean;
}

export interface Item {
	id: number;
	title: string;
	text?: string;
	icon?: string;
	path?: string;
}
