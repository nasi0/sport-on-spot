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
export class ProfileService {
  private apiUrl = 'http://localhost:5000/profiles';

  constructor(private http: HttpClient) {}

  getProfile(profileId: string): Observable<Profile> {
    const url = `${this.apiUrl}/${profileId}`;
    return this.http.get<Profile>(url);
  }

/*   deleteTask(task: Profile): Observable<Profile> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Profile>(url);
  }

  updateTaskReminder(task: Profile): Observable<Profile> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Profile>(url, task, httpOptions);
  }

  addTask(task: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.apiUrl, task, httpOptions);
  } */
}
