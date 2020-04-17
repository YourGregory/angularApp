import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  allEmployee: User[];
  mockUrl = 'http://localhost:3000/Users';
  currentUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    id: null
  };


  getAllUsers() {
    return this.http.get<User[]>(this.mockUrl, headerOption).subscribe(
      (data: User[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
      });
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.mockUrl + '/' + id, headerOption);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.mockUrl, user, headerOption);
  }
}
