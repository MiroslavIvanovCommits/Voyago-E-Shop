import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';
import { detailsBreadCrumbData } from './details-data';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {
	public items: BreadCrumbItem[] = detailsBreadCrumbData();
	public favItems: number = favorites.length;
	public cartItems: number = cart.length;

	constructor(private router: Router) { }

	public redirectToHome(item: any): void {
		const url = item.path;
		this.router.navigate([url]);
	}
}
