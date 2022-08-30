import { Profile } from 'src/app/interfaces/profile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
	private localStorage: Storage;

	private _currentProfile = new BehaviorSubject<Profile>(null);
	currentProfile = this._currentProfile.asObservable();

	constructor(private _localStorageRefService: LocalStorageRefService) {
		this.localStorage = _localStorageRefService.localStorage;
	}

	getItem(key) {
		return this.localStorage.getItem(key);
	}

	setItem(key, value) {
		const jsonData = JSON.stringify(value);
		this.localStorage.setItem(key, jsonData);
	}

	setInfo(data: Profile): void {
		const jsonData = JSON.stringify(data);
		this.localStorage.setItem('currentProfile', jsonData);
		this._currentProfile.next(data);
	}

	loadInfo(): void {
		const data = JSON.parse(this.localStorage.getItem('currentProfile'));
		this._currentProfile.next(data);
	}

	clearInfo() {
		this.localStorage.removeItem('currentProfile');
		this._currentProfile.next(null);
	}

	clearAllLocalStorage(): void {
		this.localStorage.clear();
		this._currentProfile.next(null);
	}

	isAuthenticated(): boolean {
		return this.localStorage.getItem('isAuthenticated') == 'true';
	}

	setAuthenticated(flag: boolean): void {
		this.localStorage.setItem('isAuthenticated', flag.toString());
	}
}
