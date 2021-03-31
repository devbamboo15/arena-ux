import {createSelector} from '@ngrx/store';
import {State} from '../../state';
import {AuthState} from './auth.state';

export const selectAuthState = (state: State) => state.auth;

export const selectGetToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectIsAuthorizing = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthorizing
);

export const selectAuthorizationError = createSelector(
  selectAuthState,
  (state: AuthState) => state.authorizationError
);

export const selectHasPermission = createSelector(
  selectAuthState,
  (state: AuthState) => state.hasPermission
);

export const selectIsForgetPasswordEmail = createSelector(
  selectAuthState,
  (state: AuthState) => state.isForgetPasswordEmail
);
