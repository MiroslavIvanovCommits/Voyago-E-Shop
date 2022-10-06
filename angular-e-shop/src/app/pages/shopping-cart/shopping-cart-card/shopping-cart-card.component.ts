import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingCartCard } from 'src/app/models/interfaces';
import { cart } from 'src/assets/items-data/cart';

@Component({
	selector: 'app-shopping-cart-card',
	templateUrl: './shopping-cart-card.component.html',
	styleUrls: ['./shopping-cart-card.component.css']
})
export class ShoppingCartCardComponent {

	public items: ShoppingCartCard[] = cart;
	public itemPrice(card: any): number {
		return card.price * card.quantity;
	}
	
	@Output() public onCartItemsRemoval: EventEmitter<number> = new EventEmitter();
	@Output() public onCartItemsChange: EventEmitter<undefined> = new EventEmitter();

	public addOne(card: any): void {
		card.quantity += 1;
        this.onCartItemsChange.emit();
	}

	public subtractOne(card: any): void {
		if (card.quantity > 1) {
			card.quantity -= 1;
			this.onCartItemsChange.emit();
		}
	}

	public removeCard(card: any, index: number): void {
		card.quantity = 0;
		cart.splice(index, 1);
		this.onCartItemsRemoval.emit(cart.length);
		this.onCartItemsChange.emit();
	}
}
