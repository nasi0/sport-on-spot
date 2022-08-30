import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/interfaces/profile';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};

@Injectable({
	providedIn: 'root',
})
export class ProfileService {
	private apiUrl = 'http://localhost:5000/api/users';

	constructor(private http: HttpClient) { }

	getProfile(profileId: string = ''): Observable<Profile> {
		const url = `${this.apiUrl}/${profileId}`;
		return this.http.get<Profile>(url);
	}

	generateAvatar(profile: Profile): string {
		const pastelColorsHex = ['77dd77', '89cff0', '99c5c4', '9adedb', 'aa9499', 'aaf0d1', 'b2fba5', 'b39eb5', 'bdb0d0', 'bee7a5', 'befd73', 'c1c6fc', 'c6a4a4', 'cb99c9', 'fdfd96', 'ff6961', 'ff694f', 'ff9899', 'ffb7ce', 'ca9bf7'];
		const AVATAR_API_URI = `https://ui-avatars.com/api/?name=`;
		const avatarColor = `&background=${pastelColorsHex[Math.floor(Math.random() * pastelColorsHex.length + 1)]}`;
		return `${AVATAR_API_URI}${encodeURI(profile.name)}${avatarColor}`;
	}
}
