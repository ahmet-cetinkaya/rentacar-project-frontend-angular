import { RequiredAuthenticatorType } from '../enums/requiredAuthenticatorType';
import { AccessToken } from './accessToken';

export interface LoggedResponseDto {
  accessToken?: AccessToken;
  requiredAuthenticatorType: RequiredAuthenticatorType;
}

export interface UserForLoginDto {
  email: string;
  password: string;
}
