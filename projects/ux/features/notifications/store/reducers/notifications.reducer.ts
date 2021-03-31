import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';
import {
  Notification, NotificationRequest,
  NotificationsMeta,
  NotificationsSettings
} from '../../models';
import {
  actionArchiveNotificationSuccess, actionClosedAllNotifications,
  actionDeleteNotificationSuccess,
  actionGetAllNotifications,
  actionGetAllNotificationsFailure,
  actionGetAllNotificationsSuccess, actionGetAllPaginatedNotificationsSuccess,
  actionGetNewNotifications,
  actionGetNewNotificationsFailure,
  actionGetNewNotificationsSuccess,
  actionGetNotificationSettings,
  actionGetNotificationSettingsFailure,
  actionGetNotificationSettingsSuccess,
  actionReceiveNewNotification,
  actionUpdateNotificationSettings,
  actionUpdateNotificationSettingsFailure,
  actionUpdateNotificationSettingsSuccess,
} from '../actions';

export interface AllNotificationsState extends EntityState<Notification> {
  meta: NotificationsMeta;
  isGetNotificationsLoading: boolean;
  request: NotificationRequest;
}

export interface NewNotificationsState extends EntityState<Notification> {
  meta: NotificationsMeta;
  isGetNotificationsLoading: boolean;
  request: NotificationRequest;
}

export interface NotificationsState {
  settings: NotificationsSettings;
  isFetchingSettings: boolean;
  isUpdatingSettings: boolean;
  newNotificationsState: NewNotificationsState;
  allNotificationsState: AllNotificationsState;
}

export const newNotificationsAdapter: EntityAdapter<Notification> = createEntityAdapter<Notification>({
  selectId
});

export const allNotificationsAdapter: EntityAdapter<Notification> = createEntityAdapter<Notification>({
  selectId
});

export function selectId(n: Notification): string {
  return n.notificationUUID;
}

export const initialNewNotificationsState = newNotificationsAdapter.getInitialState({
  settings: null,
  meta: null,
  isGetNotificationsLoading: false,
  request: null,
});

export const initialAllNotificationsState = allNotificationsAdapter.getInitialState({
  settings: null,
  meta: null,
  isGetNotificationsLoading: false,
  request: null,
});

export const initialNotificationsState: NotificationsState = {
  allNotificationsState: initialAllNotificationsState,
  newNotificationsState: initialNewNotificationsState,
  settings: null,
  isFetchingSettings: false,
  isUpdatingSettings: false,
};

const reducer = createReducer(
  initialNotificationsState,

  on(actionUpdateNotificationSettings, (state) =>
    ({...state, isUpdatingSettings: true})),

  on(actionUpdateNotificationSettingsSuccess, (state, {settings}) =>
    ({...state, settings, isUpdatingSettings: false})),

  on(actionUpdateNotificationSettingsFailure, (state) =>
    ({...state, isUpdatingSettings: false})),

  on(actionGetNotificationSettings, (state) =>
    ({...state, isFetchingSettings: true})),

  on(actionGetNotificationSettingsSuccess, (state, {settings}) =>
    ({...state, settings, isFetchingSettings: false})),

  on(actionGetNotificationSettingsFailure, (state) =>
    ({...state, isFetchingSettings: false})),

  on(actionArchiveNotificationSuccess, (state, {ID}) =>
    ({
      ...state,
      newNotificationsState: newNotificationsAdapter.removeOne(ID,
        {...state.newNotificationsState}),
      allNotificationsState: allNotificationsAdapter.removeOne(ID,
        {...state.allNotificationsState})
    })),

  on(actionDeleteNotificationSuccess, (state, {ID}) =>
    ({
      ...state,
      newNotificationsState: newNotificationsAdapter.removeOne(ID,
        {...state.newNotificationsState}),
      allNotificationsState: allNotificationsAdapter.removeOne(ID,
        {...state.allNotificationsState}),
    })),

  on(actionReceiveNewNotification, (state, {notification}) =>
    ({
      ...state, newNotificationsState: newNotificationsAdapter.upsertOne(notification,
        {...state.newNotificationsState})
    })),

  on(actionGetNewNotifications, (state, {request}) =>
    ({...state, newNotificationsState: {...state.newNotificationsState, request, isGetNotificationsLoading: true}})),
  on(actionGetNewNotificationsSuccess, (state, {response}) =>
    ({
      ...state,
      newNotificationsState: newNotificationsAdapter.setAll(response.notifications,
        {...state.newNotificationsState, meta: response.meta, isGetNotificationsLoading: false})
    })),
  on(actionGetNewNotificationsFailure, (state) =>
    ({...state, newNotificationsState: {...state.newNotificationsState, isGetNotificationsLoading: false}})),

  on(actionGetAllNotifications, (state, {request}) =>
    ({...state, allNotificationsState: {...state.allNotificationsState, request, isGetNotificationsLoading: true}})),
  on(actionGetAllNotificationsSuccess, (state, {response}) =>
    ({
      ...state,
      allNotificationsState: allNotificationsAdapter.setAll(response.notifications,
        {...state.allNotificationsState, meta: response.meta, isGetNotificationsLoading: false})
    })),
  on(actionGetAllPaginatedNotificationsSuccess, (state, {response}) =>
    ({
      ...state,
      allNotificationsState: allNotificationsAdapter.addMany(response.notifications,
        {...state.allNotificationsState, meta: response.meta, isGetNotificationsLoading: false})
    })),
  on(actionClosedAllNotifications, (state) =>
    ({
      ...state,
      allNotificationsState: allNotificationsAdapter.removeAll(
        {...state.allNotificationsState, meta: null, isGetNotificationsLoading: false})
    })),
  on(actionGetAllNotificationsFailure, (state) =>
    ({...state, allNotificationsState: {...state.allNotificationsState, isGetNotificationsLoading: false}})),
);

export function notificationsReducer(state: NotificationsState | undefined, action: Action) {
  return reducer(state, action);
}
