import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { changeItemCartStatus, changeItemFavoriteStatus } from 'src/app/utils/commonFunctions';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';

@Component({
	selector: 'app-details-card',
	templateUrl: './details-card.component.html',
	styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
	public showSize: boolean = false;
	public showRating: boolean = false;
	public showColor: boolean = false;
	public showWeight: boolean = false;
	public showNumber: boolean = false;

	public product = JSON.parse(localStorage.getItem("product")!);

	@Output() public onFavItemsChange: EventEmitter<any> = new EventEmitter();
	@Output() public onCartItemsChange: EventEmitter<any> = new EventEmitter();

	ngOnInit(): void {

		if (Object.keys(this.product).some(key => key === "size")) {
			this.showSize = true;
		}

		if (Object.keys(this.product).some(key => key === "stars")) {
			this.showRating = true;
		}

		if (Object.keys(this.product).some(key => key === "color")) {
			this.showColor = true;
		}

		if (Object.keys(this.product).some(key => key === "weight")) {
			this.showWeight = true;
		}

		if (Object.keys(this.product).some(key => key === "number")) {
			this.showNumber = true;
		}

		let recentlyViewedProducts = JSON.parse(localStorage.getItem("Recently viewed")!);

		if (recentlyViewedProducts) {
			localStorage.setItem("Recently viewed", JSON.stringify([...recentlyViewedProducts, this.product]));
		} else {
			localStorage.setItem("Recently viewed", JSON.stringify([this.product]));
		}
	}

	public updateCartStatus(item: any): void {
		changeItemCartStatus(item, 0);
		this.onCartItemsChange.emit(cart.length);
	}

	public updateFavoriteStatus(item: any): void {
		changeItemFavoriteStatus(item, "vertical", 0);
		this.onFavItemsChange.emit(favorites.length);
	}
}
