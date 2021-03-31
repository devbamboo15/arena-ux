import {createAction, props} from '@ngrx/store';
import {NotificationsResponse, Notification, NotificationsSettings, NotificationRequest} from '../../models';


// Get Notification Settings
export const actionGetNotificationSettings =
  createAction('[Notifications] Get Notification Settings');

export const actionGetNotificationSettingsSuccess =
  createAction('[Notifications] Get Notification Settings Success',
    props<{ settings: NotificationsSettings }>());

export const actionGetNotificationSettingsFailure =
  createAction('[Notifications] Get Notification Settings Failure',
    props<{ error: any }>());

// Update Notification Settings
export const actionUpdateNotificationSettings =
  createAction('[Notifications] Update Notification Settings',
    props<{ settings: NotificationsSettings }>());

export const actionUpdateNotificationSettingsSuccess =
  createAction('[Notifications] Update Notification Settings Success',
    props<{ settings: NotificationsSettings }>());

export const actionUpdateNotificationSettingsFailure =
  createAction('[Notifications] Update Notification Settings Failure',
    props<{ error: any }>());

// Add Receive Notification
export const actionReceiveNewNotification =
  createAction('[Notifications] Add Receive Notification',
    props<{ notification: Notification }>());

// Archive Notifications
export const actionArchiveNotification =
  createAction('[Notifications] Archive Notifications',
    props<{ ID: string }>());

export const actionArchiveNotificationSuccess =
  createAction('[Notifications] Archive Notifications Success',
    props<{ ID: string }>());

export const actionArchiveNotificationFailure =
  createAction('[Notifications] Archive Notifications Failure',
    props<{ error: any }>());

// Read Notifications
export const actionReadNotification =
  createAction('[Notifications] Read Notification',
    props<{ ID: string }>());

export const actionReadNotificationSuccess =
  createAction('[Notifications] Read Notification Success',
    props<{ ID: string }>());

export const actionReadNotificationFailure =
  createAction('[Notifications] Read Notification Failure',
    props<{ error: any }>());

// Delete Notifications
export const actionDeleteNotification =
  createAction('[Notifications] Delete Notification',
    props<{ ID: string }>());

export const actionDeleteNotificationSuccess =
  createAction('[Notifications] Delete Notification Success',
    props<{ ID: string }>());

export const actionDeleteNotificationFailure =
  createAction('[Notifications] Delete Notification Failure',
    props<{ error: any }>());

// New Notifications
export const actionGetNewNotifications =
  createAction('[Notifications] Get New Notification',
    props<{ request: NotificationRequest }>());

export const actionGetNewNotificationsSuccess =
  createAction('[Notifications] Get New Notification Success',
    props<{ response: NotificationsResponse }>());

export const actionGetNewNotificationsFailure =
  createAction('[Notifications] Get New Notification Failure',
    props<{ error: any }>());

// All Notifications
export const actionOpenAllNotifications =
  createAction('[Notifications] Open All Notifications');

export const actionClosedAllNotifications =
  createAction('[Notifications] Closed All Notifications');

export const actionGetAllNotifications =
  createAction('[Notifications] Get All Notifications',
    props<{ request: NotificationRequest }>());

export const actionGetAllPaginatedNotificationsSuccess =
  createAction('[Notifications] Get All Paginated Notifications Success',
    props<{ response: NotificationsResponse }>());

export const actionGetAllNotificationsSuccess =
  createAction('[Notifications] Get All Notifications Success',
    props<{ response: NotificationsResponse }>());

export const actionGetAllNotificationsFailure =
  createAction('[Notifications] Get All Notifications Failure',
    props<{ error: any }>());

// Test Notifications
export const actionSendTestNotification =
  createAction('[Notifications] Send Test Notification');

export const actionSendTestNotificationSuccess =
  createAction('[Notifications] Send Test Notification Success');

export const actionSendTestNotificationFailure =
  createAction('[Notifications] Send Test Notification Failure',
    props<{ error: any }>());
