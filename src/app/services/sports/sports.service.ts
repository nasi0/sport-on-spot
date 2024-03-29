import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../interfaces/Team';
import { Sport } from 'src/app/interfaces/Sport';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  private apiUrl = 'http://localhost:5000/api/sports';

  constructor(private http: HttpClient) {}

  getSport(sportId: string): Observable<Sport> {
    const url = `${this.apiUrl}/${sportId}`;
    return this.http.get<Sport>(url);
  }

  getAllSports(): Observable<Sport> {
    const url = `${this.apiUrl}/`;
    return this.http.get<Sport>(url);
  }
}
