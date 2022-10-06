import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecentlyViewedCard } from 'src/app/models/interfaces';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';
import { changeItemFavoriteStatus, changeItemCartStatus } from 'src/app/utils/commonFunctions';

@Component({
	selector: 'app-recently-viewed-card',
	templateUrl: './recently-viewed-card.component.html',
	styleUrls: ['./recently-viewed-card.component.css']
})
export class RecentlyViewedCardComponent implements OnInit {

	public items: RecentlyViewedCard[] = [];

	@Output() public onFavItemsChange: EventEmitter<any> = new EventEmitter();
	@Output() public onCartItemsChange: EventEmitter<any> = new EventEmitter();

	constructor(private router: Router) { }

	ngOnInit(): void {
		let recentlyViewedProducts = JSON.parse(localStorage.getItem("Recently viewed")!);
		if (recentlyViewedProducts) {
			this.items = recentlyViewedProducts.reverse()
				.slice(0, 4);
		}
	}

	public viewDetails(item: any): void {
		localStorage.setItem("product", JSON.stringify(item));
		this.router.navigate([`/details/${item.title}`]);
	}

	public updateCartStatus(item: any, index: number): void {
		changeItemCartStatus(item, index);
		this.onCartItemsChange.emit(cart.length);
	}

	public updateFavoriteStatus(item: any, index: number): void {
		changeItemFavoriteStatus(item, "horizontal", index);
		this.onFavItemsChange.emit(favorites.length);
	}
}
