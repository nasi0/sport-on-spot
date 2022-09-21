import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../../interfaces/profile';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	}),
};

@Injectable({
	providedIn: 'root',
})
export class LocationService {
	private apiUrl = 'https://nominatim.openstreetmap.org/search';
	allCountries: any;

	constructor(private http: HttpClient) {
		this.loadAllCountries().subscribe(allCountries => this.allCountries = allCountries.data);
	}

	loadAllCountries() {
		const url = `https://countriesnow.space/api/v0.1/countries`;
		return this.http.get<any>(url, httpOptions);
	}

	getCities(countryISO2: string) {
		const country = this.allCountries.find(element => element.iso2 === countryISO2);
		return country.cities;
	}

	searchCity(searchQuery: string): Observable<string> {
		const cities = this.getCities('BG');
		const regExp = new RegExp(searchQuery, 'gmi');
		return cities.filter(value => regExp.test(value));
	}
}
