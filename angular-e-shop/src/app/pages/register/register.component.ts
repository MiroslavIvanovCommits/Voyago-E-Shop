import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'src/assets/users-data/users';
import * as CryptoJS from 'crypto-js';  

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public registerForm: any;

	constructor(private fb: FormBuilder, private router: Router) { }

	public ngOnInit(): void {
		this.initForm();
	}

	public submitForm(): void {
		this.registerForm.markAllAsTouched();

		if (this.registerForm.valid) {

			let isNewUser = true;
			const match = data.filter(user => user.email === this.registerForm.value.email);
			if (match.length === 1) {

				isNewUser = false;
				alert("User with that email already exists!");
			}

			if (isNewUser) {
				this.registerForm.value.password = CryptoJS.AES.encrypt( this.registerForm.value.password, "entropy 100/100").toString();
				data.push(this.registerForm.value);
				localStorage.setItem("logged user", this.registerForm.value.email);
				this.registerForm.reset();
				this.router.navigate(["/"]);
			}
		}
	}

	private initForm(): void {
		this.registerForm = this.fb.group({
			firstAndLastName: ["", [Validators.pattern(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/), Validators.required]],
			email: ["", [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]],
			password: ["", [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/), Validators.required]]
		});
	}
}
