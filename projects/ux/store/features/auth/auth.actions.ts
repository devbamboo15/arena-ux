import {createAction, props} from '@ngrx/store';

import { AuthToken, Credentials, PasswordResetCredential, SignUpCredentials } from '../../models';

export const actionLogout =
  createAction('[Auth] Logout');

export const actionLogoutSuccess =
  createAction('[Auth] Logout Success');

export const actionLogoutFailure =
  createAction('[Auth] Logout Failure');

export const actionLogin =
  createAction('[Auth] Login',
    props<{ credentials: Credentials }>());

export const actionLoginSuccess =
  createAction('[Auth] Login success',
    props<{ tokenData: AuthToken }>());

export const actionLoginFailure =
  createAction('[Auth] Login failure',
    props<{ error: any }>());

export const actionRefreshToken =
  createAction('[Auth] Refresh token');

export const actionRefreshTokenSuccess =
  createAction('[Auth] Refresh token success',
    props<{ tokenData: AuthToken }>());

export const actionRefreshTokenFailure =
  createAction('[Auth] Refresh token failure',
    props<{ error: any }>());

export const actionCheckUserPermission =
  createAction('[Auth] Check User Permission');

export const actionGetUserPermissionSuccess =
  createAction('[Auth] Get User Permission Success');

export const actionGetUserPermissionFail =
  createAction('[Auth] Get User Permission Failure',
    props<{ error: any }>());

export const actionForgetPassword =
  createAction('[Auth] Forget Password',
    props<{ email: string }>());

export const actionForgetPasswordSuccess =
  createAction('[Auth] Get User Password Success');

export const actionForgetPasswordFailure =
  createAction('[Auth] Get User Password Failure',
    props<{ error: any }>());

export const actionPasswordReset =
  createAction('[Auth] Password Reset',
    props<{ credentials: PasswordResetCredential }>());

export const actionPasswordResetSuccess =
  createAction('[Auth] Password Reset Success');

export const actionPasswordResetFailure =
  createAction('[Auth] Password Reset Failure', props<{ error: any }>());

export const actionSignUp =
  createAction('[Auth] Sign up', props<{ credentials: SignUpCredentials }>());

export const actionSignUpSuccess =
  createAction('[Auth Signup success]', props<{ tokenData: AuthToken }>());

export const actionSignUpFailure =
  createAction('[Auth] Signup Failure', props<{ error: any }>());
