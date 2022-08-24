import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/Team';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private apiUrl = 'http://192.168.0.103:5000/teams';

  constructor(private http: HttpClient) {}

  getTeam(teamId: string): Observable<Team> {
    const url = `${this.apiUrl}/${teamId}`;
    return this.http.get<Team>(url);
  }

  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team, httpOptions);
  }

  getTeamByProfile(playerId: string): Observable<Team> {
    const url = `${this.apiUrl}?players_like=${playerId}`;
    return this.http.get<Team>(url);
  }
}
