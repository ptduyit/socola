import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  //token = localStorage.getItem('token');
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    // request = request.clone({
    //   setHeaders: { 'Content-Type': 'application/json' }
    // });
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('error' + err.status);
        if (err.status === 401) {
          return EMPTY;
        } else if (err.status === 403) {
          return EMPTY;
        } else {
          return throwError(err.message);
        }
      })
    );
  }
}
