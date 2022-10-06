import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TileUrlTemplateArgs } from '@progress/kendo-angular-map';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

	public tileSubdomains = ["a", "b", "c"];
	public tileUrl = (e: TileUrlTemplateArgs): string =>
		`https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
	public center = [30.2675, -97.7409];
	public markers = [{ latlng: [30.2675, -97.7409], name: "Zevo Toys" }];
	public contactForm: any;

	constructor(private fb: FormBuilder) { }

	public ngOnInit(): void {
		this.initForm();
	}

	public submitForm(): void {
		this.contactForm.markAllAsTouched();
	}

	private initForm(): void {
		this.contactForm = this.fb.group({
			name: ["", Validators.required],
			email: ["", [Validators.email, Validators.required]],
			message: ["", Validators.required],
			validation: ["", Validators.required]
		});
	}
}
