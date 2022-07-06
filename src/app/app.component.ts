import { Component, enableProdMode } from '@angular/core';

import { AuthService } from './core/services/auth/auth.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rentacar-project-frontend-angular';
  isIframe = false;

  constructor(private authService: AuthService) {
    this.isIframe = window !== window.parent && !window.opener;
  }

  ngOnInit(): void {
    this.checkIsProdMode();
    this.authService.refreshAuth();
  }

  checkIsProdMode() {
    if (environment.production === true) enableProdMode();
  }
}
