import { AccessToken } from 'app/core/models/accessToken';
import { Entity } from 'app/core/models/entity';
import { RequiredAuthenticatorType } from '../enums/requiredAuthenticatorType';

export interface User extends Entity {
  firstName: string;
  lastName: string;
  email: string;
  status: boolean;
  authenticatorType: RequiredAuthenticatorType;
}

export interface UserForUpdateFromAuthDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newPassword?: string;
}

export interface UpdatedUserFromAuthDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newPassword?: string;
  accessToken: AccessToken;
}
