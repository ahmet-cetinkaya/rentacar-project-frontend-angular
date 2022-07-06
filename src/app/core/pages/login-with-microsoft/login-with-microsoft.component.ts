import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/core/services/auth/auth.service';
import { MicrosoftAuthService } from 'app/core/services/auth/microsoft-auth.service';

@Component({
  templateUrl: './login-with-microsoft.component.html',
  styleUrls: ['./login-with-microsoft.component.scss']
})
export class LoginWithMicrosoftComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private microsoftAuthService: MicrosoftAuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('');
      return;
    }

    this.checkMicrosoftLoginAuth();
  }

  checkMicrosoftLoginAuth() {
    this.activatedRoute.queryParams.subscribe(queryParams =>
      this.microsoftAuthService.checkMicrosoftLoginAuth(queryParams['redirect'] ?? null)
    );
  }
}
