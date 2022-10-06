import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SimilarProductsCard } from 'src/app/models/interfaces';
import { changeItemCartStatus, changeItemFavoriteStatus } from 'src/app/utils/commonFunctions';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';
import { data } from './similar-card-data';
import { allItems } from 'src/assets/items-data/allItems';

@Component({
	selector: 'app-similar-card',
	templateUrl: './similar-card.component.html',
	styleUrls: ['./similar-card.component.css']
})
export class SimilarCardComponent implements OnInit {
	public category: string | null = '';
	public subCategory: string | null = '';
	public product = JSON.parse(localStorage.getItem("product")!);
	public items: SimilarProductsCard[] = data;

	@Output() public onFavItemsChange: EventEmitter<any> = new EventEmitter();
	@Output() public onCartItemsChange: EventEmitter<any> = new EventEmitter();

	ngOnInit(): void {
		this.category = localStorage.getItem("category");
		this.subCategory = localStorage.getItem("subCategory");
		// @ts-ignore
		this.items = allItems[0][this.category][this.subCategory].slice(0, 4);

		if (this.items.some(item => item.title === this.product.title)) {
			// @ts-ignore
			this.items = allItems[0][this.category][this.subCategory].slice(0, 5);
			const index = this.items.findIndex(item => item.title === this.product.title);
			this.items.splice(index, 1);
		}
	}

	public updateCartStatus(item: any, index: number): void {
		changeItemCartStatus(item, index + 1);
		this.onCartItemsChange.emit(cart.length);
	}

	public updateFavoriteStatus(item: any, index: number): void {
		changeItemFavoriteStatus(item, "horizontal", index + 1);
		this.onFavItemsChange.emit(favorites.length);
	}
}
