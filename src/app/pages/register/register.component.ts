import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Profile } from 'src/app/interfaces/profile';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService,
		private profileService: ProfileService,
		private toastCtrl: ToastController,
	) {
		this.registerForm = this.formBuilder.group({
			name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		});
	}

	ngOnInit() {
	}

	submitRegisterForm() {
		let newProfile: Profile;
		newProfile = this.registerForm.value;

		newProfile.profileImageUrl = this.profileService.generateAvatar(newProfile);

		this.authService
			.register(newProfile)
			.subscribe((response) => {
				console.log(response);
				if (response.success) {
					this.router.navigate(['/homepage']);
				} else {
					this.openToast(response.message);
				}
			});
	}

	async openToast(message) {
		const toast = await this.toastCtrl.create({
			message: message,
			duration: 5000
		});
		toast.present();
	}
}

