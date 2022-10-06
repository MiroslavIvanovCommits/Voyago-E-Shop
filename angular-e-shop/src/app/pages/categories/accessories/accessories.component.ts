import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { accessoriesBreadCrumbData } from './accessories-data';

@Component({
	selector: 'app-accessories',
	templateUrl: './accessories.component.html',
	styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
	public items: BreadCrumbItem[] = accessoriesBreadCrumbData;

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
