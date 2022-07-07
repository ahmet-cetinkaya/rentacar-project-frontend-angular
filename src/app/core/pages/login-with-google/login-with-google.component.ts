import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/core/services/auth/auth.service';
import { LoggedResponseDto } from 'app/core/models/login';
import { Redirect } from 'app/core/models/redirect';
import { RouteService } from 'app/core/services/route/route.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.scss']
})
export class LoginWithGoogleComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private routeService: RouteService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authGoogleLogin();
  }

  authGoogleLogin() {
    const googleAccessToken: string | null = localStorage.getItem('googleAccessToken');
    if (!googleAccessToken) return;

    this.authService.loginWithGoogle(googleAccessToken).subscribe({
      next: (response: LoggedResponseDto) => {
        if (response.accessToken?.token) {
          this.authService.setToken(response.accessToken);
          localStorage.removeItem('googleAccessToken');
        }
      },
      complete: () => {
        this.toastrService.info("You've been logged in successfully!");
        this.activatedRoute.queryParams.subscribe(queryParams => {
          const redirect: Redirect = queryParams['redirect']
            ? JSON.parse(queryParams['redirect'])
            : null;
          this.routeService.navigateFromRedirect(redirect);
        });
      },
      error: error => {
        console.log(error);
        this.toastrService.error('Email address does not match a user.');
        this.activatedRoute.queryParams.subscribe(queryParams => {
          const redirect: Redirect = queryParams['redirect']
            ? JSON.parse(queryParams['redirect'])
            : null;
          this.router.navigate(['login'], {
            queryParams: redirect ? { redirect: JSON.stringify(redirect) } : null
          });
        });
      }
    });
  }
}
