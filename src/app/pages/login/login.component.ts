
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService,
		private toastCtrl: ToastController
	) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required]
		});
	}
	ngOnInit() { }

	submitLoginForm() {
		if (this.loginForm.invalid) {
			return;
		}

		this.authService
			.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
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
