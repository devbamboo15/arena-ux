import {createAction, props} from '@ngrx/store';
import {Profile, PostalInfo, PhoneInfo, EmailInfo, Bankings, PayPals} from '../../models';

export const actionGetCurrentUser = createAction(
  '[Profile] Get Current User'
);

export const actionGetCurrentUserSuccess = createAction(
  '[Profile] Get Current User Success',
  props<{ profile: Profile }>()
);

export const actionGetCurrentUserFailure = createAction(
  '[Profile] Get Current User Failure',
  props<{ error: any }>()
);

export const actionCurrentUserAddPostal = createAction(
  '[Profile] Add Current User Postal Address',
  props<{ postal: PostalInfo }>()
);

export const actionCurrentUserAddPostalSuccess = createAction(
  '[Profile] Add Current User Postal Address Success'
);

export const actionCurrentUserAddPostalFailure = createAction(
  '[Profile] Add Current User Postal Address Failure',
  props<{ error: any }>()
);

export const actionCurrentUserAddContact = createAction(
  '[Profile] Add Current User Phone',
  props<{ phone: PhoneInfo }>()
);

export const actionCurrentUserAddContactSuccess = createAction(
  '[Profile] Add Current User Phone Success'
);

export const actionCurrentUserAddContactFailure = createAction(
  '[Profile] Add Current User Phone Failure',
  props<{ error: any }>()
);

export const actionCurrentUserAddEmail = createAction(
  '[Profile] Add Current User Email',
  props<{ email: EmailInfo }>()
);

export const actionCurrentUserAddEmailSuccess = createAction(
  '[Profile] Add Current User Email Success'
);

export const actionCurrentUserAddEmailFailure = createAction(
  '[Profile] Add Current User Email Failure',
  props<{ error: any }>()
);

export const actionCurrentUserAddBankAccount = createAction(
  '[Profile] Add Current User Bank',
  props<{ bankAccount: Bankings }>()
);

export const actionCurrentUserAddBankAccountSuccess = createAction(
  '[Profile] Add Current User Bank Success',
);

export const actionCurrentUserAddBankAccountFailure = createAction(
  '[Profile] Add Current User Bank Failure',
  props<{ error: any }>()
);

export const actionCurrentUserAddPaypal = createAction(
  '[Profile] Add Current User Paypal',
  props<{ paypal: PayPals }>()
);

export const actionCurrentUserAddPaypalSuccess = createAction(
  '[Profile] Add Current User Paypal Success'
);

export const actionCurrentUserAddPaypalFailure = createAction(
  '[Profile] Add Current User Paypal Failure',
  props<{ error: any }>()
);

export const actionCurrentUserDeletePostal = createAction(
  '[Profile] Delete CurrentUser Postal Address',
  props<{ postal: string }>()
);

export const actionCurrentUserDeletePostalSuccess = createAction(
  '[Profile] Delete CurrentUser Postal Address Success',
);

export const actionCurrentUserDeletePostalFailure = createAction(
  '[Profile] Delete CurrentUser Postal Address Failure',
  props<{ error: any }>()
);

export const actionCurrentUserDeleteEmail = createAction(
  '[Profile] Delete Current User Email',
  props<{ email: string }>()
);

export const actionCurrentUserDeleteEmailSuccess = createAction(
  '[Profile] Delete Current User Email Success',
);

export const actionCurrentUserDeleteEmailFailure = createAction(
  '[Profile] Delete Current User Email Failure',
  props<{ error: any }>()
);

export const actionCurrentUserDeletePhone = createAction(
  '[Profile] Delete Current User Phone',
  props<{ phone: string }>()
);

export const actionCurrentUserDeletePhoneSuccess = createAction(
  '[Profile] Delete Current User Phone Success',
);

export const actionCurrentUserDeletePhoneFailure = createAction(
  '[Profile] Delete Current User Phone Failure',
  props<{ error: any }>()
);

export const actionCurrentUserDeleteBank = createAction(
  '[Profile] Delete Current User Bank',
  props<{ bank: string }>()
);

export const actionCurrentUserDeleteBankSuccess = createAction(
  '[Profile] Delete Current User Bank Success',
);

export const actionCurrentUserDeleteBankFailure = createAction(
  '[Profile] Delete Current User Bank Failure',
  props<{ error: any }>()
);

export const actionCurrentUserDeletePaypal = createAction(
  '[Profile] Delete Paypal',
  props<{ paypal: string }>()
);

export const actionCurrentUserDeletePaypalSuccess = createAction(
  '[Profile] Delete Paypal Success'
);

export const actionCurrentUserDeletePaypalFailure = createAction(
  '[Profile] Delete Paypal Failure',
  props<{ error: any }>()
);

export const actionCurrentUserEditEmail = createAction(
  '[Profile] Edit Current User Email',
  props<{ oldEmail: string, newEmail: string }>()
);

export const actionCurrentUserEditEmailSuccess = createAction(
  '[Profile] Edit Current User Email Success',
);

export const actionCurrentUserEditEmailFailure = createAction(
  '[Profile] Edit Current User Email Failure',
  props<{ error: any }>()
);

export const actionCurrentUserEditPhone = createAction(
  '[Profile] Edit Current User Phone',
  props<{ oldPhone: string, newPhone: string }>()
);

export const actionCurrentUserEditPhoneSuccess = createAction(
  '[Profile] Edit Current User Phone Success',
);

export const actionCurrentUserEditPhoneFailure = createAction(
  '[Profile] Edit Current User Phone Failure',
  props<{ error: any }>()
);

export const actionCurrentUserVerifyEmail = createAction(
  '[Profile] Verify Current User Email'
);

export const actionCurrentUserVerifyEmailSuccess = createAction(
  '[Profile] Verify Current User Email Success'
);

export const actionCurrentUserVerifyEmailFailure = createAction(
  '[Profile] Verify Current User Email Failure',
  props<{ error: any }>()
);

export const actionCurrentUserSetPrimaryPayment = createAction(
  '[Profile] Set Current User Primary Payment',
  props<{ types: string, paymentMethod: string }>()
);

export const actionCurrentUserSetPrimaryPaymentSuccess = createAction(
  '[Profile] Set Current User Primary Payment Success',
);

export const actionCurrentUserSetPrimaryPaymentFailure = createAction(
  '[Profile] Set Current User Primary Payment Failure',
  props<{ error: any }>()
);

export const actionCurrentUserEditName = createAction(
  `[Profile] Edit Current User Name`,
  props<{ profile: Profile }>()
);

export const actionCurrentUserEditNameSuccess = createAction(
  `[Profile] Edit Current User Name Success`,
);

export const actionCurrentUserEditNameFailure = createAction(
  `[Profile] Edit Current User Name Failure`,
  props<{ error: any }>()
);

export const actionCurrentUserUploadAvatar = createAction(
  '[Profile] Upload Current User Avatar',
  props<{ avatar: File }>()
);

export const actionCurrentUserUploadAvatarSuccess = createAction(
  '[Profile] Upload Current User Avatar Success',
);

export const actionCurrentUserUploadAvatarFailure = createAction(
  '[Profile] Upload Current User Avatar Failure',
  props<{ error: any }>()
);
