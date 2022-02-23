import { createReducer, on } from '@ngrx/store';
import { TokenUserModel } from '../../models/tokenUserModel';
import { deleteTokenUserModel, setTokenUserModel } from './auth.actions';

export interface AuthState {
  tokenUserModel?: TokenUserModel;
}

const initialAuthState: AuthState = {
  tokenUserModel: undefined
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(setTokenUserModel, (state: AuthState, { tokenUserModel }) => ({
    ...state,
    tokenUserModel
  })),
  on(deleteTokenUserModel, (state: AuthState) => ({
    ...state,
    tokenUserModel: undefined
  }))
);
