import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { environment } from 'environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { JWTTokenClaim } from '../../constants/jwtTokenClaim';
import { AccessToken } from '../../models/accessToken';
import { LoggedResponseDto, UserForLoginDto } from '../../models/login';
import { UserForRegisterDto } from '../../models/register';
import { TokenUserModel } from '../../models/tokenUserModel';
import { deleteTokenUserModel, setTokenUserModel } from '../../store/auth/auth.actions';
import { CoreStates } from '../../store/core.reducer';

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

  register(userForRegisterDto: UserForRegisterDto): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(
      `${this.apiControllerUrl}/register`,
      userForRegisterDto,
      { withCredentials: true }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.deleteTokenUserModel();
  }

  get isAuthenticated(): boolean {
    if (!this.jwtHelperService.tokenGetter()) return false;
    if (this.jwtHelperService.isTokenExpired()) {
      this.refreshToken();
      return false;
    }
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

  refreshToken() {
    this.httpClient
      .get<AccessToken>(`${this.apiControllerUrl}/RefreshToken`, { withCredentials: true })
      .subscribe({
        next: (accessToken: AccessToken) => {
          localStorage.setItem('token', accessToken.token);
          this.refreshTokenUserModel();
        },
        error: () => {
          this.logout();
        }
      });
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel }));
  }

  refreshTokenUserModel() {
    const tokenUserModel: TokenUserModel | undefined = this.getTokenUserModel();
    if (!tokenUserModel) return;
    if (!this.isAuthenticated) return;

    this.setTokenUserModel(tokenUserModel);
  }

  deleteTokenUserModel() {
    this.store.dispatch(deleteTokenUserModel());
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
}
