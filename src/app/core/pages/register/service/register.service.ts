import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Register } from '../interfaces/models/register.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  postRegisterUser(register: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl, register);
  }

  getUserByEmail(email: string): Observable<Register | null> {
    return this.http
      .get<Register[]>(`${this.apiUrl}?email=${email}`)
      .pipe(map((users) => (users.length > 0 ? users[0] : null)));
  }
}
