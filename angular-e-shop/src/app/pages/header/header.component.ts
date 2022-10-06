import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dropdownListItemsData } from './header-data';
import { favorites } from 'src/assets/items-data/favorites';
import { cart } from 'src/assets/items-data/cart';
import { dropdownListItems } from 'src/app/models/interfaces';
import { allProductsArray } from 'src/app/utils/commonFunctions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	public listItems: dropdownListItems[] = dropdownListItemsData;
	public placeholder = { title: 'Categories' };
	public loggedUser = localStorage.getItem("logged user");
	public admin = localStorage.getItem("adminID") === "secretID";
	public allItemsForSearch: any = allProductsArray();
	public searchData: Array<string>;
	public currentUrl: string = window.location.href;

	@Input() public favoriteItems: number = favorites.length;
	@Input() public cartItems: number = cart.length;

	constructor(private router: Router) {
		this.searchData = this.allItemsForSearch.map((item: { title: any; }) => item.title).slice();
	}

	public route(item: any): void {
		this.placeholder.title = 'Home';
		let path = item.url;

		if (item.title === 'Home') {
			this.placeholder.title = 'Categories';
		}

		this.router.navigate([path]);
	}

	public handleFilter(value: string) {
		this.searchData = this.allItemsForSearch.map((item: { title: any; }) => item.title).filter((s: string) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
	}

	public valueChange(title: any): void {
		let item = this.allItemsForSearch.filter(function (el: { title: any; }) {
			return el.title === title;
		})[0];

		localStorage.setItem("product", JSON.stringify(item));

		if (this.currentUrl.includes("/details/")) {
			setTimeout(() => this.router.navigate([`/`]));
		}
		setTimeout(() => this.router.navigate([`/details/${item.title}`]));
	}

	public logOut(): void {
		localStorage.removeItem("logged user");
		localStorage.removeItem("adminID");
		this.loggedUser = localStorage.getItem("logged user");
		this.admin = localStorage.getItem("adminID") === "secretID";
	}
}
