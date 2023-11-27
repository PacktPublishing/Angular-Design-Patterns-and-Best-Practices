import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HostInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = environment.apiUrl;

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
