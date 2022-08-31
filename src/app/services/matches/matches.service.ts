import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../../interfaces/Match';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrl = 'http://localhost:5000/api/match';

  constructor(private http: HttpClient) {}

  getMatch(MatchId: string): Observable<Match> {
    const url = `${this.apiUrl}/${MatchId}`;
    return this.http.get<Match>(url);
  }

  finalizeMatch(match: Match): Observable<Match> {
    const url = `${this.apiUrl}/finalize/${match._id}`;
		return this.http.post<Match>(url, match, httpOptions);
	}
}
