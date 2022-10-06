import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class GuestAuthGuard implements CanActivate {

	constructor(private _router: Router) { }

	canActivate(): boolean {
		if (this.loggedIn()) {
			return true;
		} else {
			this._router.navigate(["/"]);
			return false;
		}
	}

	public loggedIn() {
		return !localStorage.getItem("logged user");
	}
}

@Injectable({
	providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

	constructor(private _router: Router) { }

	canActivate(): boolean {
		if (this.loggedIn()) {
			return true;
		} else {
			this._router.navigate(["/"]);
			return false;
		}
	}

	public loggedIn() {
		return !!localStorage.getItem("adminID");
	}
}
