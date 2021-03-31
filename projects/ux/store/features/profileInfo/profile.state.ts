import {Profile} from '../../models';
import {createReducer, on} from '@ngrx/store';
import * as fromActions from './profile.actions';
import {Action} from '@ngrx/store';

export interface ProfileState {
  profile: Profile;
  isFetching: boolean;
  isAddingPostal: boolean;
  isAddingPhone: boolean;
  isEditingName: boolean;
  isEditingPhone: boolean;
  isEditingEmail: boolean;
  isAddingEmail: boolean;
  isUploadingAvatar: boolean;
  isVerifyingEmail: boolean;
  isAddingBank: boolean;
  isAddingPayPal: boolean;
  isDeletingPayPal: boolean;
  isDeletingEmail: boolean;
  isDeletingPhone: boolean;
  isDeletingBank: boolean;
  isDeletingPostal: boolean;
  isSettingPrimary: boolean;
}

const initialState: ProfileState = {
  profile: null,
  isFetching: false,
  isAddingPostal: false,
  isAddingPhone: false,
  isEditingName: false,
  isEditingPhone: false,
  isEditingEmail: false,
  isAddingEmail: false,
  isUploadingAvatar: false,
  isVerifyingEmail: false,
  isAddingBank: false,
  isAddingPayPal: false,
  isDeletingPayPal: false,
  isDeletingEmail: false,
  isDeletingPhone: false,
  isDeletingBank: false,
  isDeletingPostal: false,
  isSettingPrimary: false,
};

const reducer = createReducer(
  initialState,

  // Set Primary Payment
  on(fromActions.actionCurrentUserSetPrimaryPayment, (state) => ({...state, isSettingPrimary: true})),
  on(fromActions.actionCurrentUserSetPrimaryPaymentSuccess, (state) => ({...state, isSettingPrimary: false})),
  on(fromActions.actionCurrentUserSetPrimaryPaymentFailure, (state) => ({...state, isSettingPrimary: false})),

  // Edit Phone
  on(fromActions.actionCurrentUserEditPhone, (state) => ({...state, isEditingPhone: true})),
  on(fromActions.actionCurrentUserEditPhoneSuccess, (state) => ({...state, isEditingPhone: false})),
  on(fromActions.actionCurrentUserEditPhoneFailure, (state) => ({...state, isEditingPhone: false})),

  // Delete Postal
  on(fromActions.actionCurrentUserDeletePostal, (state) => ({...state, isDeletingPostal: true})),
  on(fromActions.actionCurrentUserDeletePostalSuccess, (state) => ({...state, isDeletingPostal: false})),
  on(fromActions.actionCurrentUserDeletePostalFailure, (state) => ({...state, isDeletingPostal: false})),

  // Edit Email
  on(fromActions.actionCurrentUserEditEmail, (state) => ({...state, isEditingEmail: true})),
  on(fromActions.actionCurrentUserEditEmailSuccess, (state) => ({...state, isEditingEmail: false})),
  on(fromActions.actionCurrentUserEditEmailFailure, (state) => ({...state, isEditingEmail: false})),

  // Delete Bank
  on(fromActions.actionCurrentUserDeleteBank, (state) => ({...state, isDeletingBank: true})),
  on(fromActions.actionCurrentUserDeleteBankSuccess, (state) => ({...state, isDeletingBank: false})),
  on(fromActions.actionCurrentUserDeleteBankFailure, (state) => ({...state, isDeletingBank: false})),

  // Delete Phone
  on(fromActions.actionCurrentUserDeletePhone, (state) => ({...state, isDeletingPhone: true})),
  on(fromActions.actionCurrentUserDeletePhoneSuccess, (state) => ({...state, isDeletingPhone: false})),
  on(fromActions.actionCurrentUserDeletePhoneFailure, (state) => ({...state, isDeletingPhone: false})),

  // Delete Email
  on(fromActions.actionCurrentUserDeleteEmail, (state) => ({...state, isDeletingEmail: true})),
  on(fromActions.actionCurrentUserDeleteEmailSuccess, (state) => ({...state, isDeletingEmail: false})),
  on(fromActions.actionCurrentUserDeleteEmailFailure, (state) => ({...state, isDeletingEmail: false})),

  // Delete PayPal
  on(fromActions.actionCurrentUserDeletePaypal, (state) => ({...state, isDeletingPayPal: true})),
  on(fromActions.actionCurrentUserDeletePaypalSuccess, (state) => ({...state, isDeletingPayPal: false})),
  on(fromActions.actionCurrentUserDeletePaypalFailure, (state) => ({...state, isDeletingPayPal: false})),

  // Add PayPal
  on(fromActions.actionCurrentUserAddPaypal, (state) => ({...state, isAddingPayPal: true})),
  on(fromActions.actionCurrentUserAddPaypalSuccess, (state) => ({...state, isAddingPayPal: false})),
  on(fromActions.actionCurrentUserAddPaypalFailure, (state) => ({...state, isAddingPayPal: false})),

  // Add Bank
  on(fromActions.actionCurrentUserAddBankAccount, (state) => ({...state, isAddingBank: true})),
  on(fromActions.actionCurrentUserAddBankAccountSuccess, (state) => ({...state, isAddingBank: false})),
  on(fromActions.actionCurrentUserAddBankAccountFailure, (state) => ({...state, isAddingBank: false})),

  // Verify Email
  on(fromActions.actionCurrentUserVerifyEmail, (state) => ({...state, isVerifyingEmail: true})),
  on(fromActions.actionCurrentUserVerifyEmailSuccess, (state) => ({...state, isVerifyingEmail: false})),
  on(fromActions.actionCurrentUserVerifyEmailFailure, (state) => ({...state, isVerifyingEmail: false})),

  // Upload Avatar
  on(fromActions.actionCurrentUserUploadAvatar, (state) => ({...state, isUploadingAvatar: true})),
  on(fromActions.actionCurrentUserUploadAvatarSuccess, (state) => ({...state, isUploadingAvatar: false})),
  on(fromActions.actionCurrentUserUploadAvatarFailure, (state) => ({...state, isUploadingAvatar: false})),

  // Add Email
  on(fromActions.actionCurrentUserAddEmail, (state) => ({...state, isAddingEmail: true})),
  on(fromActions.actionCurrentUserAddEmailSuccess, (state) => ({...state, isAddingEmail: false})),
  on(fromActions.actionCurrentUserAddEmailFailure, (state) => ({...state, isAddingEmail: false})),

  // Add Phone
  on(fromActions.actionCurrentUserAddContact, (state) => ({...state, isAddingPhone: true})),
  on(fromActions.actionCurrentUserAddContactSuccess, (state) => ({...state, isAddingPhone: false})),
  on(fromActions.actionCurrentUserAddContactFailure, (state) => ({...state, isAddingPhone: false})),

  // Add Postal
  on(fromActions.actionCurrentUserAddPostal, (state) => ({...state, isAddingPostal: true})),
  on(fromActions.actionCurrentUserAddPostalSuccess, (state) => ({...state, isAddingPostal: false})),
  on(fromActions.actionCurrentUserAddPostalFailure, (state) => ({...state, isAddingPostal: false})),

  // Edit Name
  on(fromActions.actionCurrentUserEditName, (state) => ({...state, isEditingName: true})),
  on(fromActions.actionCurrentUserEditNameSuccess, (state) => ({...state, isEditingName: false})),
  on(fromActions.actionCurrentUserEditNameFailure, (state) => ({...state, isEditingName: false})),

  // Get Current User
  on(fromActions.actionGetCurrentUser, (state) => ({...state, isFetching: true})),
  on(fromActions.actionGetCurrentUserSuccess, (state, {profile}) => ({
    ...state,
    profile,
    isFetching: false
  })),
  on(fromActions.actionGetCurrentUserFailure, (state) => ({...state, isFetching: false}))
);

export function profileReducer(state: ProfileState | undefined, action: Action) {
  return reducer(state, action);
}
