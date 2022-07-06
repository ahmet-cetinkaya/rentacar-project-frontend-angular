import { Inject, Injectable } from '@angular/core';
import { MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, RedirectRequest } from '@azure/msal-browser';
import { LoggedResponseDto } from 'app/core/models/login';
import { Redirect } from 'app/core/models/redirect';
import { ToastrService } from 'ngx-toastr';
import { RouteService } from '../route/route.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftAuthService {
  constructor(
    private authService: AuthService,
    private msalAuthService: MsalService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private toastrService: ToastrService,
    private routeService: RouteService
  ) {}

  authMicrosoftLogin(authenticationResult: AuthenticationResult, redirect?: Redirect) {
    this.authService.loginWithMicrosoft(authenticationResult.accessToken).subscribe({
      next: (response: LoggedResponseDto) => {
        if (response.accessToken?.token) this.authService.setToken(response.accessToken);
      },
      complete: () => {
        this.toastrService.info("You've been logged in successfully!");
        this.routeService.navigateFromRedirect(redirect);
      }
    });
  }

  checkMicrosoftLoginAuth(redirect?: Redirect) {
    this.msalAuthService.handleRedirectObservable().subscribe({
      next: (result: AuthenticationResult) => {
        if (result !== null) {
          // logged in
          this.authMicrosoftLogin(result, redirect);
          return;
        }

        // not logged in
        if (this.msalGuardConfig.authRequest)
          this.msalAuthService.loginRedirect({
            ...this.msalGuardConfig.authRequest
          } as RedirectRequest);
        else this.msalAuthService.loginRedirect();
      },
      error: error => console.log(error)
    });
  }
}
