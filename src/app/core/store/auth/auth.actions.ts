import { createAction, props } from '@ngrx/store';
import { TokenUserModel } from './../../models/tokenUserModel';

export const setTokenUserModel = createAction(
  'Set_TokenUserModel',
  props<{ tokenUserModel: TokenUserModel }>()
);

export const deleteTokenUserModel = createAction('Delete_TokenUserModel');
