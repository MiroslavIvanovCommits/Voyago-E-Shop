import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopPicksCard } from 'src/app/models/interfaces';
import { topPicksData } from './top-picks-card-data';

@Component({
	selector: 'app-top-picks-card',
	templateUrl: './top-picks-card.component.html',
	styleUrls: ['./top-picks-card.component.css']
})
export class TopPicksCardComponent implements OnInit {
	public items: TopPicksCard[] = topPicksData;
	public visible: TopPicksCard[] = [];

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.visible = this.items.slice(0, 4);
	}

	public viewDetails(item: any): void {
		localStorage.setItem("product", JSON.stringify(item));
		this.router.navigate([`/details/${item.title}`]);
	}
}
