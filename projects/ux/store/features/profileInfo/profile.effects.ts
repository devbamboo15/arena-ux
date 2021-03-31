import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProfileService} from '../../services';
import * as fromActions from './profile.actions';
import {exhaustMap, map, concatMap, catchError, mergeMap, withLatestFrom} from 'rxjs/operators';
import {Profile} from '../../models';
import {Store} from '@ngrx/store';
import {State} from '../../state';
import {of} from 'rxjs';
import {selectAuthState} from '../auth';

@Injectable()
export class ProfileInfoEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private store$: Store<State>
  ) {
  }

  actionGetCurrentUser = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionGetCurrentUser),
    exhaustMap(() =>
      this.profileService.getCurrentUser().pipe(
        map((profile: Profile) => fromActions.actionGetCurrentUserSuccess({profile})),
        catchError(error => of(fromActions.actionGetCurrentUserFailure({error})))
      )),
  ));

  actionCurrentUserAddPostal = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserAddPostal),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.addPostal(params.postal, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserAddPostalSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserAddPostalFailure({error})))
      )),
  ));

  actionEditCurrentUserName = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserEditName),
    exhaustMap((action) =>
      this.profileService.editName(action.profile).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserEditNameSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserEditNameFailure({error})))
      )),
  ));

  actionAddCurrentUserPhone = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserAddContact),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.addContact(params.phone, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserAddContactSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserAddContactFailure({error})))
      )),
  ));

  actionAddCurrentUserEmail = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserAddEmail),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.addEmail(params.email, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserAddEmailSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserAddEmailFailure({error})))
      )),
  ));

  actionUploadCurrentUserAvatar = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserUploadAvatar),
    exhaustMap((action) =>
      this.profileService.uploadImage(action.avatar).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserUploadAvatarSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserUploadAvatarFailure({error})))
      )),
  ));

  actionVerifyCurrentUserEmail = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserVerifyEmail),
    withLatestFrom(this.store$.select(selectAuthState)),
    exhaustMap(([, auth]) =>
      this.profileService.verifyEmail(auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserVerifyEmailSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserVerifyEmailFailure({error})))
      )),
  ));

  actionAddCurrentUserBank = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserAddBankAccount),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.addBankAccount(params.bankAccount, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserAddBankAccountSuccess(),
          fromActions.actionGetCurrentUser()
        ]),
        catchError(error => of(fromActions.actionCurrentUserAddBankAccountFailure({error})))
      )),
  ));

  actionAddCurrentUserPaypal = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserAddPaypal),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.addPaypal(params.paypal, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserAddPaypalSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserAddPaypalFailure({error})))
      )),
  ));

  actionDeleteCurrentUserPaypal = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserDeletePaypal),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.deletePaypal(params.paypal, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserDeletePaypalSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserDeletePaypalFailure({error})))
      )),
  ));

  actionDeleteCurrentUserEmail = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserDeleteEmail),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.deleteEmail(params.email, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserDeleteEmailSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserDeleteEmailFailure({error})))
      )),
  ));

  actionDeleteCurrentUserPhone = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserDeletePhone),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.deleteContact(params.phone, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserDeletePhoneSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserDeletePhoneFailure({error})))
      )),
  ));

  actionDeleteBank = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserDeleteBank),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.deleteBankAccount(params.bank, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserDeleteBankSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserDeleteBankFailure({error})))
      )),
  ));

  actionDeletePostal = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserDeletePostal),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.deletePostal(params.postal, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserDeletePostalSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserDeletePostalFailure({error})))
      )),
  ));

  actionEditEmail = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserEditEmail),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.editEmail(params.oldEmail, params.newEmail, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserEditEmailSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserEditEmailFailure({error})))
      )),
  ));

  actionEditPhone = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserEditPhone),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.editPhone(params.oldPhone, params.newPhone, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserEditPhoneSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserEditPhoneFailure({error})))
      )),
  ));

  actionPaymentMethod = createEffect(() => this.actions$.pipe(
    ofType(fromActions.actionCurrentUserSetPrimaryPayment),
    withLatestFrom(this.store$.select(selectAuthState)),
    concatMap(([params, auth]) =>
      this.profileService.setPrimaryPayment(params.types, params.paymentMethod, auth.token.user).pipe(
        mergeMap(() => [
          fromActions.actionCurrentUserSetPrimaryPaymentSuccess(),
          fromActions.actionGetCurrentUser(),
        ]),
        catchError(error => of(fromActions.actionCurrentUserSetPrimaryPaymentFailure({error})))
      )),
  ));

}
