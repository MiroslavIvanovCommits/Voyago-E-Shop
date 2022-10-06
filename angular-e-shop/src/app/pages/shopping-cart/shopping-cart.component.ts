import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { cart } from 'src/assets/items-data/cart';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

	public subTotal: number = 0;
	public cartItems: number = cart.length;

	constructor(private cdr: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.updateTotalPrice();
	}

	public buttonClickEventHandler(): void {
		this.updateTotalPrice();
	}

	public removeEventHandler(updatedCartItems: any): void {
		this.cartItems = updatedCartItems;
	}

	public updateTotalPrice(): void {
		this.subTotal = 0;
		cart.forEach((element: { price: number; quantity: number; }) => {
			this.subTotal += element.price * element.quantity;
		});
	}

	public onCheckOut(): void {
		if (localStorage.getItem("logged user") !== null) {
			alert("The order was received successfully!");
		} else {
			alert("Please log in to finish the order!");
		}
	}
}
