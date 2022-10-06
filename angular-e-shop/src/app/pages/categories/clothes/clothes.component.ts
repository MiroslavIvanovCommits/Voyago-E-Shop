import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { clothesBreadCrumbData } from './clothes-data';

@Component({
	selector: 'app-clothes',
	templateUrl: './clothes.component.html',
	styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
	public items: BreadCrumbItem[] = clothesBreadCrumbData;

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
