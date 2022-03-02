import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

import { AuthService } from 'app/core/services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated) {
      return this.authService.refreshToken().pipe(
        map(accessToken => {
          this.authService.setToken(accessToken);

          this.router.navigate(
            route.url.map(r => r.path),
            { queryParams: { ...route.url.map(r => r.parameters) } }
          ); //todo: Although I return the required return value, the route does not happen.
          return true;
        }),
        catchError(err => {
          this.router.navigate(['login']);
          return of(false);
        })
      );

      // return lastValueFrom(this.authService.refreshToken())
      //   .then(r => true)
      //   .catch(r => false);
    }

    return true;
  }
}
