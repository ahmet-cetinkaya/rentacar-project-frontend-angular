import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedResponseDto, UserForLoginDto } from '../../models/login';
import { Observable, map } from 'rxjs';
import { deleteTokenUserModel, setTokenUserModel } from '../../store/auth/auth.actions';

import { AccessToken } from 'app/core/models/accessToken';
import { CookieService } from 'ngx-cookie-service';
import { CoreStates } from '../../store/core.reducer';
import { Injectable } from '@angular/core';
import { JWTTokenClaim } from '../../constants/jwtTokenClaim';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TokenUserModel } from '../../models/tokenUserModel';
import { UserForRegisterDto } from '../../models/register';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
    .select(states => states.appAuth)
    .pipe(map(state => state.tokenUserModel));

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private store: Store<CoreStates>,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {}

  login(userForLoginDto: UserForLoginDto): Observable<LoggedResponseDto> {
    return this.httpClient.post<LoggedResponseDto>(
      `${this.apiControllerUrl}/login`,
      userForLoginDto,
      { withCredentials: true }
    );
  }

  loginWithMicrosoft(microsoftAccessToken: string): Observable<LoggedResponseDto> {
    return this.httpClient.post<LoggedResponseDto>(
      `${this.apiControllerUrl}/loginWithMicrosoft`,
      `\"${microsoftAccessToken}\"`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  loginWithGoogle(googleAccessToken: string): Observable<LoggedResponseDto> {
    return this.httpClient.post<LoggedResponseDto>(
      `${this.apiControllerUrl}/loginWithGoogle`,
      `\"${googleAccessToken}\"`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  register(userForRegisterDto: UserForRegisterDto): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(
      `${this.apiControllerUrl}/register`,
      userForRegisterDto,
      { withCredentials: true }
    );
  }

  refreshToken(): Observable<AccessToken> {
    return this.httpClient.get<AccessToken>(`${this.apiControllerUrl}/RefreshToken`, {
      withCredentials: true
    });
  }

  get isAuthenticated(): boolean {
    if (!this.jwtHelperService.tokenGetter()) return false;
    if (this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }

  isAuthorized(requiredClaims?: string[]): boolean {
    if (!this.isAuthenticated) return false;
    const tokenUserModel: TokenUserModel | undefined = this.getTokenUserModel();
    if (
      tokenUserModel &&
      requiredClaims &&
      !requiredClaims.some(role => tokenUserModel.claims.includes(role))
    )
      return false;
    return true;
  }

  setToken(AccessToken: AccessToken) {
    localStorage.setItem('token', AccessToken.token);
    this.setTokenUserModel();
  }

  setTokenUserModel() {
    const tokenUserModel = this.getTokenUserModel();
    if (tokenUserModel) this.store.dispatch(setTokenUserModel({ tokenUserModel }));
  }

  refreshAuth() {
    if (this.jwtHelperService.tokenGetter() && !this.isAuthenticated) {
      this.refreshToken().subscribe({
        next: accessToken => {
          this.setToken(accessToken);
        },
        error: () => {
          this.logout();
        }
      });
      return;
    }

    this.setTokenUserModel();
  }

  logout() {
    this.cookieService.delete('refreshToken');
    localStorage.removeItem('token');
    this.deleteTokenUserModel();
    this.router.navigateByUrl('');
  }

  getTokenUserModel(): TokenUserModel | undefined {
    const decodedToken = this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter());
    if (!decodedToken) return;

    const tokenUserModel: TokenUserModel = {
      id: +decodedToken[JWTTokenClaim.identifier],
      name: decodedToken[JWTTokenClaim.fullname],
      email: decodedToken[JWTTokenClaim.email],
      claims: decodedToken[JWTTokenClaim.role] ? decodedToken[JWTTokenClaim.role].split(',') : []
    };
    return tokenUserModel;
  }

  deleteTokenUserModel() {
    this.store.dispatch(deleteTokenUserModel());
  }
}
