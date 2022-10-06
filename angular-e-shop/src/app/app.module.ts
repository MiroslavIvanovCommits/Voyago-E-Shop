import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { MapModule } from '@progress/kendo-angular-map';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { TopPicksCardComponent } from './pages/home/top-picks-card/top-picks-card.component';
import { RecentlyViewedCardComponent } from './pages/home/recently-viewed-card/recently-viewed-card.component';
import { FavoriteCardComponent } from './pages/favorites/favorite-card/favorite-card.component';
import { ShoppingCartCardComponent } from './pages/shopping-cart/shopping-cart-card/shopping-cart-card.component';
import { ComponentsComponent } from './pages/categories/components/components.component';
import { AccessoriesComponent } from './pages/categories/accessories/accessories.component';
import { ClothesComponent } from './pages/categories/clothes/clothes.component';
import { BikesComponent } from './pages/categories/bikes/bikes.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './pages/products/product-card/product-card.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { FilterModule } from '@progress/kendo-angular-filter';
import { PagerModule } from '@progress/kendo-angular-pager';
import { ProductsFilterComponent } from './pages/products/products-filter/products-filter.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsCardComponent } from './pages/details/details-card/details-card.component';
import { SimilarCardComponent } from './pages/details/similar-card/similar-card.component';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { ReportViewerComponent } from './pages/report-viewer/report-viewer.component';
import { AdminAuthGuard, GuestAuthGuard } from './auth.guard';




@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		FavoritesComponent,
		ContactsComponent,
		ShoppingCartComponent,
		TopPicksCardComponent,
		RecentlyViewedCardComponent,
		FavoriteCardComponent,
		ShoppingCartCardComponent,
		ComponentsComponent,
		AccessoriesComponent,
		ClothesComponent,
		BikesComponent,
		ProductsComponent,
		ProductCardComponent,
		ProductsFilterComponent,
		DetailsComponent,
		DetailsCardComponent,
		SimilarCardComponent,
		ReportViewerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NavigationModule,
		BrowserAnimationsModule,
		ButtonsModule,
		IconsModule,
		IndicatorsModule,
		LayoutModule,
		DropDownsModule,
		InputsModule,
		LabelModule,
		FormsModule,
		ReactiveFormsModule,
		ScrollViewModule,
		MapModule,
		GridModule,
		FilterModule,
		PagerModule,
		FormsModule,
		TelerikReportingModule
	],
	exports: [
		TopPicksCardComponent,
		RecentlyViewedCardComponent
	],
	providers: [GuestAuthGuard, AdminAuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
