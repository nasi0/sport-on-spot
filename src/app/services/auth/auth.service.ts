import { Profile } from 'src/app/interfaces/profile';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private apiUrl = 'http://localhost:5000/api/users';
	private readonly TOKEN_NAME = 'auth_token';
	private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
	isLoggedIn$ = this._isLoggedIn$.asObservable();

	get token() {
		return this.localStorageService.getItem(this.TOKEN_NAME)?.replace(/\"/g, "");
	}

	constructor(
		private http: HttpClient,
		private localStorageService: LocalStorageService
	) {
		const token = this.localStorageService.getItem(this.TOKEN_NAME)?.replace(/\"/g, "");
		this._isLoggedIn$.next(!!token);
	}

	register(profile: Profile) {
		return this.registerServerCall(profile).pipe(
			tap((response: any) => {
				if (response.success) {
					this._isLoggedIn$.next(true);
					this.localStorageService.setItem(this.TOKEN_NAME, response.token);
					this.localStorageService.setItem('currentProfileId', response._id);
				} else {
					//Error
				}
			})
			);
		}

	login(email: string, password: string) {
		return this.loginServerCall(email, password).pipe(
			tap((response: any) => {
				if (response.success) {
					this._isLoggedIn$.next(true);
					this.localStorageService.setItem(this.TOKEN_NAME, response.token.toString());
					this.localStorageService.setItem('currentProfileId', response._id);
				} else {
					//Error
				}
			})
		);
	}

	logout() {
		this._isLoggedIn$.next(false);
		this.localStorageService.clearInfo();
	}

	private registerServerCall(profile: Profile) {
		const url = `${this.apiUrl}/register/`;
		return this.http.post(url, profile);
	}

	private loginServerCall(email: string, password: string) {
		const url = `${this.apiUrl}/login/`;
		return this.http.post(url, { email, password });
	}
}
