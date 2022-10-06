import { Component } from '@angular/core';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
	public favItems: number = favorites.length;
	public cartItems: number = cart.length;
}
