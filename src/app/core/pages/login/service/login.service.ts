import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../interface/login.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users';

  private http = inject(HttpClient);

  login(email: string, password: string): Observable<Login> {
    return this.http.get<Login[]>(`${this.apiUrl}`).pipe(
      map((user) => {
        const userFound = user.find(
          (user) => user.email === email && user.password === password
        );
        if (userFound) {
          return userFound;
        } else {
          throw new Error('User not found');
        }
      })
    );
  }
}
