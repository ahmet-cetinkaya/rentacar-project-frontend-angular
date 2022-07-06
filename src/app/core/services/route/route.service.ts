import { Injectable } from '@angular/core';
import { Redirect } from 'app/core/models/redirect';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private router: Router) {}

  navigateFromRedirect(redirect?: Redirect) {
    if (!redirect) {
      this.router.navigate(['/']);
      return;
    }

    this.router.navigate([redirect.url], {
      queryParams: { redirect: JSON.stringify(redirect.next) }
    });
  }
}
