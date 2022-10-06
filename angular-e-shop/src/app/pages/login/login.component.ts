import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'src/assets/users-data/users';
import * as CryptoJS from 'crypto-js';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public loginForm: any;

	constructor(private fb: FormBuilder, private router: Router) { }

	public ngOnInit(): void {
		this.initForm();
	}

	public submitForm(): void {

		this.loginForm.markAllAsTouched();

		if (this.loginForm.valid) {
			const match = data.filter(user => user.email === this.loginForm.value.email && CryptoJS.AES.decrypt(user.password, "entropy 100/100").toString(CryptoJS.enc.Utf8) === this.loginForm.value.password);

			if (match.length === 1) {

				localStorage.setItem("logged user", this.loginForm.value.email);
				if (match[0].id === "secretID") {
					localStorage.setItem("adminID", "secretID");
				}
				this.loginForm.reset();
				this.router.navigate(["/"]);
			} else {
				alert("Incorrect login credentials!");
			}
		}
	}

	private initForm(): void {
		this.loginForm = this.fb.group({
			email: ["", [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]],
			password: ["", [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/), Validators.required]]
		});
	}
}
