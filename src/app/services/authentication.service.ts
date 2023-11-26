import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url = 'http://localhost:3000/nouveauUser' 

  constructor(private http: HttpClient) {}

  signup(newUser: User): Observable<User> {
    return this.http.post<User>(this.url, newUser);
  }
  
}




