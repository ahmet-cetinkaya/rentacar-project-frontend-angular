import { AuthReducer, AuthState } from './auth/auth.reducer';

export interface CoreStates {
  appAuth: AuthState;
}

export const CoreReducers = {
  appAuth: AuthReducer
};
