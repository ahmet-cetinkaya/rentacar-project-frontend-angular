import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';

import { AccessToken } from './../../models/accessToken';
import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === HttpStatusCode.Unauthorized) {
          return this.handleUnauthorizedError(request, next);
        }

        return throwError(() => new Error(error));
      })
    );
  }

  private handleUnauthorizedError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      return this.authService.refreshToken().pipe(
        switchMap((accessToken: AccessToken) => {
          this.isRefreshing = false;
          this.authService.setToken(accessToken);

          return next.handle(
            request.clone({
              setHeaders: {
                Authorization: `Bearer ${accessToken.token}`
              }
            })
          );
        }),

        catchError(err => {
          this.isRefreshing = false;
          this.authService.logout();
          return throwError(() => new Error(err));
        })
      );
    }

    return next.handle(request);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
