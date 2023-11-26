import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) {}

  addUser(newUser: User): Observable<User> {
    const { email, password } = newUser; 
    const userAdded = { email, password }; 

    return this.http.post<User>(this.userUrl, userAdded);
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
}


