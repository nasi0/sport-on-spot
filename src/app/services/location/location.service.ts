import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../../interfaces/profile';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};

@Injectable({
	providedIn: 'root',
})
export class LocationService {
	private apiUrl = 'https://nominatim.openstreetmap.org/search';

	constructor(private http: HttpClient) { }

	searchCity(searchQuery: string): Observable<string> {
		const url = `${this.apiUrl}?q=${searchQuery}&format=json&limit=5`;
		return this.http.get<string>(url);
	}
}
