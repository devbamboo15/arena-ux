import {Action, createReducer, on} from '@ngrx/store';

import {AuthToken} from '../../models';
import {
  actionLogin,
  actionLoginFailure,
  actionLoginSuccess,
  actionLogout,
  actionGetUserPermissionSuccess,
  actionForgetPasswordSuccess,
  actionForgetPasswordFailure,
  actionPasswordResetSuccess,
  actionPasswordReset,
  actionPasswordResetFailure, actionGetUserPermissionFail
} from './auth.actions';
import {actionRefreshTokenSuccess} from './auth.actions';

export interface AuthState {
  token: AuthToken | null;
  isAuthorizing: boolean;
  authorizationError: any;
  hasPermission: boolean;
  isForgetPasswordEmail: boolean;
}

export const initialState: AuthState = {
  token: null,
  isAuthorizing: false,
  hasPermission: false,
  isForgetPasswordEmail: false,
  authorizationError: null
};

const reducer = createReducer(
  initialState,
  on(actionLogin, (state, {}) =>
    ({...state, authorizationError: null, isAuthorizing: true})),
  on(actionLoginSuccess, (state, {tokenData}) =>
    ({...state, token: tokenData, isAuthorizing: false})),
  on(actionLoginFailure, (state, {error}) =>
    ({...state, authorizationError: error, isAuthorizing: false})),
  on(actionGetUserPermissionFail, (state, {error}) =>
    ({...state, authorizationError: error, isAuthorizing: false})),
  on(actionLogout, (state, {}) =>
    ({...state, token: null, hasPermission: false})),
  on(actionGetUserPermissionSuccess, (state) => ({...state, hasPermission: true})),
  on(actionRefreshTokenSuccess, (state, {tokenData}) =>
    ({...state, token: {...state.token, auth: (tokenData as any)}})), // @todo type fix
  on(actionForgetPasswordSuccess, (state) => ({...state, isForgetPasswordEmail: true})),
  on(actionForgetPasswordFailure, (state) => ({...state, isForgetPasswordEmail: false})),
  on(actionPasswordReset, (state) => ({...state, isAuthorizing: true})),
  on(actionPasswordResetSuccess, (state) => ({...state, isAuthorizing: false})),
  on(actionPasswordResetFailure, (state) => ({...state, isAuthorizing: false})),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
