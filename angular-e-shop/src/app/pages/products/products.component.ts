import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';
import { productsBreadCrumbData } from './products-data';
import { allItems } from 'src/assets/items-data/allItems';
import { allProductsArray } from 'src/app/utils/commonFunctions';
import { URL } from 'src/app/models/constants';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent {
	public category: string | null = '';
	public subCategory: string | null = '';
	public navigationItems: BreadCrumbItem[] = productsBreadCrumbData();

	public showDiscounted: boolean = true;
	public showSize: boolean = false;
	public showRating: boolean = false;
	public showColor: boolean = false;
	public showPrice: boolean = false;
	public showWeight: boolean = false;

	public favItems: number = favorites.length;
	public cartItems: number = cart.length;

	@Output() public items: any = [];
	@Output() public filteredItems: any = [];

	constructor(private router: Router) { }

	public ngOnInit(): void {
		this.category = localStorage.getItem('category') as string;
		this.subCategory = localStorage.getItem('subCategory') as string;

		if (!this.category || !this.subCategory) {
			this.category = "bikes";
			this.subCategory = "Mountain Bikes";
		}

		// @ts-ignore
		this.items = allItems[0][this.category][this.subCategory];

		if (Object.keys(this.items[0]).some(key => key === "size")) {
			this.showSize = true;
		}

		if (Object.keys(this.items[0]).some(key => key === "stars")) {
			this.showRating = true;
		}

		if (Object.keys(this.items[0]).some(key => key === "color")) {
			this.showColor = true;
		}

		if (Object.keys(this.items[0]).some(key => key === "price")) {
			this.showPrice = true;
		}

		if (Object.keys(this.items[0]).some(key => key === "weight")) {
			this.showWeight = true;
		}

		if (window.location.href === `${URL}/products`) {
			this.showSize = true;
			this.showRating = true;
			this.showColor = true;
			this.showPrice = true;

			this.items = allProductsArray();
		}

		this.navigationItems = [];

	}

	public modelFilter(e: any): void {
		this.filteredItems = e;
	}

	public redirectToHome(item: any): void {
		const url = item.path;
		this.router.navigate([url]);
	}
}
