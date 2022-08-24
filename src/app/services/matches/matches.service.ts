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
  private apiUrl = 'http://192.168.0.103:5000/matches';

  constructor(private http: HttpClient) {}

  getMatch(MatchId: string): Observable<Match> {
    const url = `${this.apiUrl}/${MatchId}`;
    return this.http.get<Match>(url);
  }
/*
  deleteTask(task: Match): Observable<Match> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Match>(url);
  }

  updateTaskReminder(task: Match): Observable<Match> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Match>(url, task, httpOptions);
  }

  addTask(task: Match): Observable<Match> {
    return this.http.post<Match>(this.apiUrl, task, httpOptions);
  } */
}
