import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	currentProfile = this.localStorageService.currentProfile;
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private localStorageService: LocalStorageService
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
	}
	ngOnInit() { this.localStorageService.clearAllLocalStorage(); }

	submitLoginForm() {
		console.log(this.loginForm.value);
		let currentProfile: Profile = {
			id: 'nasi0',
			firstname: 'Atanas',
			lastname: 'Petrov',
			email: 'nasi0.ap@gmail.com'
		};
		this.localStorageService.setInfo(currentProfile);
		this.localStorageService.setAuthenticated(true);
		console.log(this.localStorageService.isAuthenticated());
	}

}
