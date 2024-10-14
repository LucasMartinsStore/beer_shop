import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Register } from '../interfaces/models/register.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  postRegisterUser(register: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl, register);
  }
}
