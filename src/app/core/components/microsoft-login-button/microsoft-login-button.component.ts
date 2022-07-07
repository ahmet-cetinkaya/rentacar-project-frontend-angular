import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Redirect } from 'app/core/models/redirect';

@Component({
  selector: 'app-microsoft-login-button',
  templateUrl: './microsoft-login-button.component.html',
  styleUrls: ['./microsoft-login-button.component.scss']
})
export class MicrosoftLoginButtonComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

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
}
