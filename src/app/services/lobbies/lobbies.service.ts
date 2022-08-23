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
  private apiUrl = 'http://localhost:5000/lobbies';

  constructor(private http: HttpClient) {}

  getLobby(lobbyId: string): Observable<Lobby> {
    const url = `${this.apiUrl}/${lobbyId}`;
    return this.http.get<Lobby>(url);
  }

  getAllLobbies(): Observable<Lobby> {
    const url = `${this.apiUrl}/`;
    return this.http.get<Lobby>(url);
  }

  createLobby(lobby: Lobby): Observable<Lobby> {
    return this.http.post<Lobby>(this.apiUrl, lobby, httpOptions);
  }
}
