import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../../core/services/auth/auth.service';
import { LoggedResponseDto } from './../../../../core/models/login';
import { Redirect } from '../../../../core/models/redirect';
import { RouteService } from 'app/core/services/route/route.service';
import { ToastrService } from 'ngx-toastr';
import { UserForLoginDto } from '../../../../core/models/login';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  passwordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) return;

    let userForLoginDto: UserForLoginDto = { ...this.loginForm.value };

    this.authService.login(userForLoginDto).subscribe({
      next: (response: LoggedResponseDto) => {
        if (response.accessToken?.token) this.authService.setToken(response.accessToken);
      },
      complete: () => {
        this.toastrService.info("You've been logged in successfully!");
        this.activatedRoute.queryParams.subscribe(queryParams =>
          this.routeService.navigateFromRedirect(JSON.parse(queryParams['redirect'] ?? null))
        );
      }
    });
  }

  navigateLoginWithMicrosoft() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const redirect: Redirect = queryParams['redirect']
        ? JSON.parse(queryParams['redirect'])
        : null;

      this.router.navigate(['/login-with-microsoft'], {
        queryParams: { redirect: redirect ? JSON.stringify(redirect.url) : null }
      });
    });
  }

  togglePasswordHidden() {
    this.passwordHidden = !this.passwordHidden;
  }

  isPasswordHidden(): string {
    return this.passwordHidden ? 'password' : 'text';
  }

  isPasswordHiddenIcon(): string {
    return this.passwordHidden ? 'pi-eye-slash' : 'pi-eye text-primary';
  }
}
