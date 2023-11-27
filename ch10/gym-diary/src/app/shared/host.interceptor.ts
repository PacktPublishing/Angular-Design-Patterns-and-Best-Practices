import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HostInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = 'http://localhost:3000';
    const resource = request.url;

    if (request.url.includes('http')) {
      return next.handle(request);
    }

    const urlsReq = request.clone({
      url: `${url}/${resource}`,
    });

    return next.handle(urlsReq);
  }
}
