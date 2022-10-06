import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { bikesBreadCrumbData } from './bikes-data';

@Component({
	selector: 'app-bikes',
	templateUrl: './bikes.component.html',
	styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
	public items: BreadCrumbItem[] = bikesBreadCrumbData;

	constructor(private router: Router) { }

	public redirectToHome(): void {
		this.router.navigate([""]);
	}

	public loadItems(category: string, subCategory: string) {
		localStorage.setItem("category", category);
		localStorage.setItem("subCategory", subCategory);

		this.router.navigate([`/products/${category}/${subCategory!.toLowerCase()}`]);
	}
}
