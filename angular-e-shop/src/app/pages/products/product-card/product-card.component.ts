
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Orientation } from '@progress/kendo-angular-layout';
import { PageChangeEvent } from "@progress/kendo-angular-pager";
import { Router } from '@angular/router';
import { favorites } from 'src/assets/items-data/favorites';
import { cart } from 'src/assets/items-data/cart';
import { ProductCard } from 'src/app/models/interfaces';
import { changeItemFavoriteStatus, changeItemCartStatus } from 'src/app/utils/commonFunctions';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges {
	public listItems: Array<string> = ["Price - Low to High", "Price - High to Low", "Name - A to Z", "Name - Z to A"];
	public orientation: Orientation = "horizontal";
	public skip = 0;
	public pageSize = 12;
	public total!: number;
	public pagedProducts: any[] = [];
	public category: string | null = '';
	public subCategory: string | null = '';
	public sort: string = "";

	@Input() public items!: ProductCard[];
	@Input() public filteredItems!: ProductCard[];

	@Output() public onFavItemsChange: EventEmitter<any> = new EventEmitter();
	@Output() public onCartItemsChange: EventEmitter<any> = new EventEmitter();

	constructor(private el: ElementRef, private router: Router) { }

	public ngOnInit(): void {
		this.total = this.items.length;
		this.pageData(this.items);
		this.filteredItems = this.items;
	}

	public ngOnChanges(): void {
		this.skip = 0;
		this.total = this.filteredItems.length;
		this.pageData(this.filteredItems);
		this.sortBy(this.sort);
	}

	public toggleOrientation(orientation: Orientation, btn: string): void {
		const firstBtn = this.el.nativeElement.querySelectorAll(".orientation-btns button")[0];
		const secondBtn = this.el.nativeElement.querySelectorAll(".orientation-btns button")[1];

		this.orientation = orientation;

		if (btn === "first") {
			this.pageSize = 12;
			firstBtn.classList.add('activeView');
			secondBtn.classList.remove('activeView');
			this.pageData(this.items);
		} else {
			this.pageSize = 5;
			secondBtn.classList.add('activeView');
			firstBtn.classList.remove('activeView');
			this.pageData(this.items);
		}
	}

	public sortBy(latestSort: any): void {
		this.skip = 0;
		this.sort = latestSort;
		switch (this.sort) {

			case "Price - Low to High":
				// @ts-ignore
				this.filteredItems = this.filteredItems.sort((a, b) => a.price - b.price);
				this.pageData(this.filteredItems);
				break;
			case "Price - High to Low":
				// @ts-ignore
				this.filteredItems = this.filteredItems.sort((a, b) => b.price - a.price);
				this.pageData(this.filteredItems);
				break;
			case "Name - A to Z":
				// @ts-ignore
				this.filteredItems = this.filteredItems.sort((a, b) => a.title.localeCompare(b.title));
				this.pageData(this.filteredItems);
				break;
			case "Name - Z to A":
				// @ts-ignore
				this.filteredItems = this.filteredItems.sort((a, b) => b.title.localeCompare(a.title));
				this.pageData(this.filteredItems);
				break;

			default:
				break;
		}
	}

	public updateCartStatus(item: any, index: number): void {
		changeItemCartStatus(item, index);
		this.onCartItemsChange.emit(cart.length);
	}

	public updateFavoriteStatus(item: any, orientation: any, index: number): void {
		changeItemFavoriteStatus(item, orientation, index);
		this.onFavItemsChange.emit(favorites.length);
	}

	public onPageChange(e: PageChangeEvent): void {
		this.skip = e.skip;
		this.pageSize = e.take;
		this.pageData(this.filteredItems);
	}

	public viewDetails(item: any): void {
		localStorage.setItem("product", JSON.stringify(item));
		this.router.navigate([`/details/${item.title}`]);
	}

	private pageData(items: any): void {
		this.pagedProducts = items.slice(
			this.skip,
			this.skip + this.pageSize
		);
	}
}
