import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccessToken } from 'app/core/models/accessToken';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { LoggedResponseDto } from './../../../../core/models/login';
import { RequiredAuthenticatorType } from 'app/core/enums/requiredAuthenticatorType';
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
  requiredAuthenticatorType!: RequiredAuthenticatorType;

  get authenticatorLabelText() {
    switch (this.requiredAuthenticatorType) {
      case RequiredAuthenticatorType.email:
        return ' in email';
      case RequiredAuthenticatorType.otp:
        return ' in authenticator app';
      default:
        return '';
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private toastrService: ToastrService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(customControlsConfig?: { [key: string]: any }) {
    this.loginForm = this.formBuilder.group(
      customControlsConfig ?? {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    );
  }

  login() {
    if (!this.loginForm.valid) return;

    let userForLoginDto: UserForLoginDto = { ...this.loginForm.value };

    this.authService.login(userForLoginDto).subscribe({
      next: (response: LoggedResponseDto) => {
        if (!response.accessToken?.token && response.requiredAuthenticatorType) {
          this.createLoginForm({
            email: [userForLoginDto.email, [Validators.required, Validators.email]],
            password: [userForLoginDto.password, Validators.required],
            authenticatorCode: ['', Validators.required]
          });
          this.requiredAuthenticatorType = response.requiredAuthenticatorType;
          return;
        }

        this.authService.setToken(response.accessToken as AccessToken);
      },
      complete: () => {
        if (!this.authService.isAuthenticated) return;

        this.toastrService.info("You've been logged in successfully!");
        this.activatedRoute.queryParams.subscribe(queryParams =>
          this.routeService.navigateFromRedirect(JSON.parse(queryParams['redirect'] ?? null))
        );
      }
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
