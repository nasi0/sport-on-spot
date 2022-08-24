import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private profileService: ProfileService,
		private localStorageService: LocalStorageService
	) {
		this.registerForm = this.formBuilder.group({
			firstname: ['', [Validators.required]],
			lastname: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		});
	}

	ngOnInit() {
	}

	submitRegisterForm() {
		let newProfile: Profile;
		newProfile = this.registerForm.value;
		newProfile.id = UUID.UUID().replace(/-/g, '').slice(0, 15);

		console.log(newProfile);

		this.profileService.createProfile(newProfile).subscribe((profile) => this.loginProfile(profile));
	}

	loginProfile(profile: Profile) {
		this.localStorageService.setInfo(profile);
		this.localStorageService.setAuthenticated(true);
	}

	/* 	nasko() {
			let inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));
			inputs.forEach(element => {
				element.addEventListener('focus', (event) => {
					console.log(event);
					document.body.scrollTop += element.getBoundingClientRect().top - 10
				});
			}); */

}
	/* $('#id-of-text-input').on('focus', function() {
document.body.scrollTop += this.getBoundingClientRect().top - 10
}); */

