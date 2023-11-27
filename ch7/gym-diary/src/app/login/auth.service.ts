import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginForm, Token } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private url = 'http://localhost:3000/auth/login';
  private token?: Token;

  login(loginForm: Partial<LoginForm>): Observable<Token> {
    return this.httpClient
      .post<Token>(this.url, loginForm)
      .pipe(tap((token) => (this.token = token)));
  }

  get isLogged() {
    return this.token ? true : false;
  }

  logout() {
    this.token = undefined;
  }
}
