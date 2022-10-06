import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { componentsBreadCrumbData } from './components-data';

@Component({
	selector: 'app-components',
	templateUrl: './components.component.html',
	styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
	public items: BreadCrumbItem[] = componentsBreadCrumbData;

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
