import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Context } from '../model/Context';

// Define an interface for the data you expect (optional but recommended)
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = 'http://localhost:8080/api/context'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getAllContexts(): Observable<Context[]> {
    return this.http.get<Context[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createContext(context: any): Observable<any> {
    return this.http.post(this.apiUrl, context, {responseType: 'text'}) 
    ;
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}