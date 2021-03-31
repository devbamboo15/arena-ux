import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {layoutReducer, LayoutState} from './features/layout';
import {authReducer, AuthState} from './features/auth';
import {initStateFromLocalStorage} from './meta-reducers/init-state-from-local-storage.reducer';
import {SupportDeskState, supportdeskReducer} from './features/support-desk';
import {ProfileState, profileReducer} from './features/profileInfo';

export interface State {
  layout: LayoutState;
  auth: AuthState;
  supportDesk: SupportDeskState;
  profile: ProfileState;
}

export const reducers: ActionReducerMap<State> = {
  layout: layoutReducer,
  auth: authReducer,
  supportDesk: supportdeskReducer,
  profile: profileReducer,
};

export const metaReducers: MetaReducer<State>[] = [initStateFromLocalStorage];

export const selectState = state => state;
