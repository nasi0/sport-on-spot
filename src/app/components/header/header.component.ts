import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Input() pageTitle: any;
	@Input() hideProfileIcon: any;
	randomId: number;
	isLoggedIn: boolean;

	constructor(
		private authService: AuthService,
		private router: Router) { }

	ngOnInit() {
		this.randomId = Math.ceil(Math.random() * 100);
		this.authService.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
	}
	logout() {
		this.authService.logout();
		this.router.navigate(['/login']);
	}

}
