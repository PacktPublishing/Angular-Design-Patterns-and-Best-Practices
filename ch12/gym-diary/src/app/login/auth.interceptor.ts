import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AuthService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authService.token;
    
    if (request.url.includes('auth')) {
      return next.handle(request);
    }

    if (token) {
      const reqAuth = request.clone({
        headers: request.headers.set(`Authorization`, `Bearer ${token}`),
      });
      return next.handle(reqAuth);
    }

    return next.handle(request);
  }
}
