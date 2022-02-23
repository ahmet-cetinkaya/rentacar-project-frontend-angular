import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated) return false;

    const requiredClaims: string[] = route.data['requiredClaims'] || [];

    const isUserAuthorized = this.authService.isAuthorized(requiredClaims);
    if (!isUserAuthorized) {
      this.toastrService.error('You are not authorized to access this page');
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
