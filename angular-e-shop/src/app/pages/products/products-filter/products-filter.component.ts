import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { URL } from 'src/app/models/constants';
import { ProductCard } from 'src/app/models/interfaces';
import { allProductsArray } from 'src/app/utils/commonFunctions';
import { allItems } from "src/assets/items-data/allItems";

@Component({
	selector: 'app-products-filter',
	templateUrl: './products-filter.component.html',
	styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
	public category: string | null = '';
	public subCategory: string | null = '';
	public items: ProductCard[] = [];
	public filteredItems: ProductCard[] = [];
	public discountedDataList: any = [];
	public modelsDataList: any = [];
	public sizesDataList: any = [];
	public ratingsDataList: any = [];
	public colorsDataList: any = [];
	public currentUrl: string = window.location.href;

	@Input() public showDiscounted!: boolean;
	@Input() public showSize!: boolean;
	@Input() public rating!: boolean;
	@Input() public color!: boolean;
	@Input() public price!: boolean;
	@Input() public weight!: boolean;

	@Output() public onFiltersChange: EventEmitter<any> = new EventEmitter();

	constructor() { }

	public ngOnInit(): void {
		this.category = localStorage.getItem('category') as string;
		this.subCategory = localStorage.getItem('subCategory') as string;

		if (!this.category || !this.subCategory) {
			this.category = "bikes";
			this.subCategory = "Mountain Bikes";
		}

		this.refreshItemsAndFilters();
	}

	public uncheckAll(): void {
		let showAll = document.getElementById("showAll");
		(showAll as HTMLInputElement).checked = true;

		this.modelsDataList = [];
		this.sizesDataList = [];
		this.ratingsDataList = [];
		this.colorsDataList = [];

		this.refreshItemsAndFilters();
		this.onChange();
	}

	public changePrice(range: any): void {
		let numericTextBoxes = document.querySelectorAll(".numericTextBox");
		(numericTextBoxes[0] as HTMLInputElement).setAttribute("value", range[0]);
	}

	public onChange(): void {
		if (window.location.href === `${URL}/products`) {
			this.items = allProductsArray();

		} else {
			// @ts-ignore
			this.items = allItems[0][this.category][this.subCategory];
		}

		let discountedItemsCheckbox: any = document.getElementById('showDiscounted');

		if (discountedItemsCheckbox.checked) {
			this.items = this.discountedDataList;
		}

		this.filteredItems = this.modelsDataList.slice(0);
		this.filteredItems = this.filteredItems.filter(x => x.isChecked === true);
		let selectedModels = this.filteredItems.map(x => x.model);

		this.filteredItems = this.sizesDataList.slice(0);
		this.filteredItems = this.filteredItems.filter(x => x.isChecked === true);
		let selectedSizes = this.filteredItems.map(x => x.size);

		this.filteredItems = this.ratingsDataList.slice(0);
		this.filteredItems = this.filteredItems.filter(x => x.isChecked === true);
		let selectedRatings = this.filteredItems.map(x => x.stars);

		this.filteredItems = this.colorsDataList.slice(0);
		this.filteredItems = this.filteredItems.filter(x => x.isChecked === true);
		let selectedColors = this.filteredItems.map(x => x.color);

		if (selectedModels.length > 0) {
			this.items = this.items.filter((obj) => selectedModels.includes(obj.model));
		}

		if (selectedSizes.length > 0) {
			// @ts-ignore
			this.items = this.items.filter((obj) => selectedSizes.includes(obj.size));
		}

		if (selectedRatings.length > 0) {
			// @ts-ignore
			this.items = this.items.filter((obj) => selectedRatings.includes(obj.stars));
		}

		if (selectedColors.length > 0) {
			this.items = this.items.filter((obj) => selectedColors.includes(obj.color));
		}

		this.onFiltersChange.emit(this.items);
	}

	public refreshItemsAndFilters(): void {
		if (this.currentUrl === `${URL}/products`) {
			this.items = allProductsArray();

		} else {
			// @ts-ignore
			this.items = allItems[0][this.category][this.subCategory];
		}

		if (this.showDiscounted) {
			let discounted: any = [];

			this.items.forEach(obj => {
				if (obj.discountedPercents > 0) {
					discounted.push(obj);
				}
			});

			this.discountedDataList = discounted;
		}

		let models: any = [];

		this.items.forEach(obj => {
			if (!models.includes(obj.model)) {
				models.push(obj.model);
			}
		});


		models.forEach((model: string) => {
			this.modelsDataList.push({ model: model, isChecked: false });
		});

		if (this.showSize) {
			let sizes: any = [];

			this.items.forEach(obj => {
				if (!sizes.includes(obj.size) && obj.size !== undefined) {
					sizes.push(obj.size);
				}
			});

			if (this.currentUrl !== `${URL}/products`) {
				if (isNaN(sizes[0])) {
					sizes.sort((a: string, b: string) => b.localeCompare(a));
				} else {
					sizes.sort((a: number, b: number) => a - b);
				}
			}

			sizes.forEach((size: number | string) => {
				this.sizesDataList.push({ size: size, isChecked: false });
			});
		}

		if (this.rating) {
			let ratings: any = [];

			this.items.forEach(obj => {
				if (!ratings.includes(obj.stars)) {
					ratings.push(obj.stars);
				}
			});

			ratings.forEach((stars: number) => {
				this.ratingsDataList.push({ stars: stars, isChecked: false });
			});
		}

		if (this.color) {
			let colors: any = [];

			this.items.forEach(obj => {
				if (!colors.includes(obj.color) && obj.color !== undefined) {
					colors.push(obj.color);
				}
			});

			colors.forEach((color: string) => {
				this.colorsDataList.push({ color: color, isChecked: false });
			})
		}
	}
}
