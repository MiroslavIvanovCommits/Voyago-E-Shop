import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard, GuestAuthGuard } from './auth.guard';
import { AccessoriesComponent } from './pages/categories/accessories/accessories.component';
import { BikesComponent } from './pages/categories/bikes/bikes.component';
import { ClothesComponent } from './pages/categories/clothes/clothes.component';
import { ComponentsComponent } from './pages/categories/components/components.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportViewerComponent } from './pages/report-viewer/report-viewer.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "login",
		component: LoginComponent,
		canActivate: [GuestAuthGuard]
	},
	{
		path: "register",
		component: RegisterComponent,
		canActivate: [GuestAuthGuard]
	},
	{
		path: "contacts",
		component: ContactsComponent
	},
	{
		path: "favorites",
		component: FavoritesComponent
	},
	{
		path: "shopping-cart",
		component: ShoppingCartComponent
	},
	{
		path: "categories/components",
		component: ComponentsComponent
	},
	{
		path: "categories/accessories",
		component: AccessoriesComponent
	},
	{
		path: "categories/clothes",
		component: ClothesComponent
	},
	{
		path: "categories/bikes",
		component: BikesComponent
	},
	{
		path: "products/:category/:subCategory",
		component: ProductsComponent
	},
	{
		path: "products",
		component: ProductsComponent
	},
	{
		path: "details/:productTitle",
		component: DetailsComponent
	},
	{
		path: "report-viewer",
		component: ReportViewerComponent,
		canActivate: [AdminAuthGuard]
	},
	{
		path: "**",
		redirectTo: ""
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
