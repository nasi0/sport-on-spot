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
  private apiUrl = 'http://192.168.0.103:5000/lobbies';

  constructor(private http: HttpClient) {}

  getLobby(lobbyId: string): Observable<Lobby> {
    const url = `${this.apiUrl}/${lobbyId}`;
    return this.http.get<Lobby>(url);
  }

  getAllLobbies(): Observable<Lobby> {
    const url = `${this.apiUrl}/`;
    return this.http.get<Lobby>(url);
  }

  searchLobby(queryObject: Object): Observable<Lobby> {
    let query = '';
    Object.keys(queryObject).forEach((key) => {
      console.log(queryObject[key]);
      query += `${key}_like=${queryObject[key]}&`
    });
    console.log(query);
    const url = `${this.apiUrl}?${query}`;
    return this.http.get<Lobby>(url);
  }

  createLobby(lobby: Lobby): Observable<Lobby> {
    return this.http.post<Lobby>(this.apiUrl, lobby, httpOptions);
  }
}
