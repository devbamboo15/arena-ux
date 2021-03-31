import {
  allNotificationsAdapter,
  AllNotificationsState,
  newNotificationsAdapter,
  NewNotificationsState,
  NotificationsState
} from '../reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const newNotificationsSelectors = newNotificationsAdapter.getSelectors();
const allNotificationsSelectors = allNotificationsAdapter.getSelectors();

export const selectNotificationsState =
  createFeatureSelector<NotificationsState>('notifications');

export const selectNewNotificationsState = createSelector(
  selectNotificationsState,
  (state: NotificationsState) => state.newNotificationsState,
);

export const selectIsUpdatingNotificationsSettings = createSelector(
  selectNotificationsState,
  (state: NotificationsState) => state.isUpdatingSettings,
);

export const selectNotificationsSettings = createSelector(
  selectNotificationsState,
  (state: NotificationsState) => state.settings,
);

export const selectIsFetchingNotificationsSettings = createSelector(
  selectNotificationsState,
  (state: NotificationsState) => state.isFetchingSettings,
);

export const selectAllNotificationsState = createSelector(
  selectNotificationsState,
  (state: NotificationsState) => state.allNotificationsState,
);

export const selectNewNotifications = createSelector(
  selectNewNotificationsState,
  newNotificationsSelectors.selectAll
);

export const selectAllNotifications = createSelector(
  selectAllNotificationsState,
  allNotificationsSelectors.selectAll
);

export const selectIsNewGetNotificationsLoading = createSelector(
  selectNewNotificationsState,
  (state: NewNotificationsState) => state.isGetNotificationsLoading,
);

export const selectIsAllGetNotificationsLoading = createSelector(
  selectAllNotificationsState,
  (state: AllNotificationsState) => state.isGetNotificationsLoading,
);

export const selectNewNotificationsRequest = createSelector(
  selectNewNotificationsState,
  (state: NewNotificationsState) => state.request,
);

export const selectAllNotificationsRequest = createSelector(
  selectAllNotificationsState,
  (state: AllNotificationsState) => state.request,
);

export const selectAllNotificationsMeta = createSelector(
  selectAllNotificationsState,
  (state: AllNotificationsState) => state.meta,
);
