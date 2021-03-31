import { Injectable } from '@angular/core';
import { catchError, concatMap, map, withLatestFrom, switchMap, exhaustMap, mergeMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { State } from '../../state';
import {
  actionLogin,
  actionLoginFailure,
  actionLoginSuccess,
  actionLogout,
  actionRefreshToken,
  actionRefreshTokenFailure,
  actionRefreshTokenSuccess,
  actionCheckUserPermission,
  actionGetUserPermissionSuccess,
  actionGetUserPermissionFail,
  actionForgetPassword,
  actionForgetPasswordSuccess,
  actionForgetPasswordFailure,
  actionPasswordReset,
  actionPasswordResetSuccess,
  actionPasswordResetFailure,
  actionSignUp
} from './auth.actions';
import { selectAuthState } from './auth.selectors';
import { actionGo } from '../router';
import { AuthService, LocalStorageService } from '../../services';
import { StoreConfiguration } from '../../store-configuration';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private storeConfiguration: StoreConfiguration,
    private store$: Store<State>,
  ) {
  }

  authLogin = createEffect(() => this.actions$.pipe(
    ofType(actionLogin),
    concatMap((params) => {
      return this.authService.signIn(params.credentials).pipe(
        map(data => {
          return actionLoginSuccess({ tokenData: data.data });
        }),
        catchError(error => of(actionLoginFailure({ error })))
      );
    }),
  ));

  authLoginSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLoginSuccess),
      withLatestFrom(this.store$.pipe(select(selectAuthState))),
      map(([params, state]) => actionCheckUserPermission())
    ),
  );

  checkUserPermission = createEffect(() =>
    this.actions$.pipe(
      ofType(actionCheckUserPermission),
      switchMap(() => this.authService.getUserPermission()),
      map((permission) => {
        if (permission.data) {
          return actionGetUserPermissionSuccess();
        } else {
          return actionGetUserPermissionFail(
            { error: { error: { status: { message: `You don't have permission of Arena.Developers` } } } });
        }
      }),
      catchError(error => of(actionGetUserPermissionFail({ error })))
    ),
  );

  getUserPermissionSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(actionGetUserPermissionSuccess),
      withLatestFrom(this.store$.pipe(select(selectAuthState))),
      mergeMap(([params, state]) => {
        // Save state to local storage
        this.localStorageService.setItem('auth', state);
        return [ actionGo({ path: '/' }) ];
      })
    ),
  );

  authRefreshToken = createEffect(() =>
    this.actions$.pipe(
      ofType(actionRefreshToken),
      withLatestFrom(this.store$.pipe(select(selectAuthState))),
      exhaustMap(([params, state]) => {
        return this.authService.refreshToken(state.token.auth.refresh_token).pipe(
          map((data) => {
            return actionRefreshTokenSuccess({ tokenData: data.data });
          }),
          catchError(error => of(actionRefreshTokenFailure({ error })))
        );
      })
    ),
  );

  actionRefreshTokenFailure = createEffect(() =>
    this.actions$.pipe(
      ofType(actionRefreshTokenFailure),
      map(() => actionLogout()),
    )
  );

  actionLogout = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLogout),
      mergeMap(params => {
        this.localStorageService.removeItem('auth');
        return [actionGo({ path: this.storeConfiguration.signInURL })];
      }),
    ),
  );

  refreshTokenFailure = createEffect(() =>
    this.actions$.pipe(
      ofType(actionRefreshTokenFailure),
      map((params) => {
        return actionLogout();
      })
    ),
  );

  actionTokenRefreshSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(actionRefreshTokenSuccess),
      withLatestFrom(this.store$.pipe(select(selectAuthState))),
      map(([params, state]) => {
        this.localStorageService.setItem('auth', state);
      })
    ), { dispatch: false });

  actionForgetPassword = createEffect(() => this.actions$.pipe(
    ofType(actionForgetPassword),
    concatMap((params) => {
      return this.authService.forgetPassword(params.email).pipe(
        map(data => {
          return actionForgetPasswordSuccess();
        }),
        catchError(error => of(actionForgetPasswordFailure({ error })))
      );
    }),
  ));

  actionResetPassword = createEffect(() => this.actions$.pipe(
    ofType(actionPasswordReset),
    concatMap((params) => {
      return this.authService.passwordReset(params.credentials).pipe(
        map(data => {
          return actionPasswordResetSuccess();
        }),
        catchError(error => of(actionPasswordResetFailure({ error })))
      );
    }),
  ));

  actionPasswordResetSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(actionPasswordResetSuccess),
      withLatestFrom(this.store$.pipe(select(selectAuthState))),
      map(([params, state]) => {
        return actionGo({ path: '/sign-in' });
      })
    ),
  );

  actionSignup = createEffect(() =>
    this.actions$.pipe(
      ofType(actionSignUp),
      concatMap((params) => {
        return this.authService.signUp(params.credentials).pipe(
          map(data => {
            return actionLoginSuccess({ tokenData: data.data });
          })
        );
      })
    )

  );
}
