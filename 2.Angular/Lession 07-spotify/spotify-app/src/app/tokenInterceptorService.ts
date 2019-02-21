import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const API_TOKEN = `BQBi5Lauf4BQuKF39no4spArsJbutNs7cXNtK2tWZmJZ6xo3KBLcQP3XC786XjGzUyCwa7Xqs0R3LhRgTLAhetzHV1RbMreVY-U0puIvf081F3zMK4w_3ip-hJQZJx9ZFe9DPQs6jGq-qKW-IAizdF08SCU1z8cxkA`;

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization: `Authorization: Bearer ${API_TOKEN}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
