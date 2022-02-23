import { Component, OnInit } from '@angular/core';
import { TokenUserModel } from 'app/core/models/tokenUserModel';
import { AuthService } from 'app/core/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.authService.tokenUserModel$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
