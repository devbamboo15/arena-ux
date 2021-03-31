import { State } from '../../state';
import { createSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';

export const selectProfileInfoState = (state: State) => state.profile;

export const selectProfile = createSelector(
    selectProfileInfoState,
    (state: ProfileState) => state.profile
);

export const selectIsFetchingProfile = createSelector(
    selectProfileInfoState,
    (state: ProfileState) => state.isFetching
);
