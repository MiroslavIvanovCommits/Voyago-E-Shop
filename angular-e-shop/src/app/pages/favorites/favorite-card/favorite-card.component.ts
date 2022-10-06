import { Component, EventEmitter, Output } from '@angular/core';
import { favorites } from 'src/assets/items-data/favorites';
import { cart } from 'src/assets/items-data/cart';
import { FavoriteCard } from 'src/app/models/interfaces';
import { changeItemFavoriteStatus, changeItemCartStatus } from 'src/app/utils/commonFunctions';

@Component({
	selector: 'app-favorite-card',
	templateUrl: './favorite-card.component.html',
	styleUrls: ['./favorite-card.component.css']
})
export class FavoriteCardComponent {
	public items: FavoriteCard[] = favorites;

	@Output() public onFavItemsChange: EventEmitter<any> = new EventEmitter();
	@Output() public onCartItemsChange: EventEmitter<any> = new EventEmitter();

	public updateCartStatus(item: any, index: number): void {
		changeItemCartStatus(item, index);
		this.onCartItemsChange.emit(cart.length);
	}

	public updateFavoriteStatus(item: any, index: number): void {
		changeItemFavoriteStatus(item, "vertical", index);
		this.onFavItemsChange.emit(favorites.length);
	}
}
