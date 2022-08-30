import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lobby } from '../../interfaces/Lobby';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};

@Injectable({
	providedIn: 'root',
})
export class LobbiesService {
	private apiUrl = 'http://localhost:5000/api/lobby';

	constructor(private http: HttpClient) { }

	getLobby(lobbyId: string): Observable<Lobby> {
		const url = `${this.apiUrl}/one/${lobbyId}`;
		return this.http.get<Lobby>(url);
	}

	getAllLobbies(): Observable<Lobby> {
		const url = `${this.apiUrl}/all`;
		return this.http.get<Lobby>(url);
	}

	searchLobby(queryObject: Object): Observable<Lobby> {
		let query = '';
		Object.keys(queryObject).forEach((key) => {
			console.log(queryObject[key]);
			query += `${key}=${queryObject[key]}&`
		});
		console.log(query);
		const url = `${this.apiUrl}/search?${query}`;
		return this.http.get<Lobby>(url);
	}

	createLobby(lobby: Lobby): Observable<Lobby> {
		return this.http.post<Lobby>(this.apiUrl, lobby, httpOptions);
	}
}
