import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/interfaces';
import { cart } from 'src/assets/items-data/cart';
import { favorites } from 'src/assets/items-data/favorites';
import { homeBreadCrumbData } from './home-data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    public items: Item[] = homeBreadCrumbData;
    public setInterval: any;
	
	public favItems: number = favorites.length;
	public cartItems: number = cart.length;

    @ViewChild("scrollview") public scrollview: any;

    public ngAfterViewInit(): void {
        this.setInterval = setInterval(() => {
            this.scrollview.next();
        }, 3500);
    }

    public ngOnDestroy(): void {
        clearInterval(this.setInterval);
    }
}
