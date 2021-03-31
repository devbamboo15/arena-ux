import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {State} from '@arenaops/arena.ux/store';
import {catchError, concatMap, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  actionArchiveNotification,
  actionArchiveNotificationFailure,
  actionArchiveNotificationSuccess, actionClosedAllNotifications,
  actionDeleteNotification,
  actionDeleteNotificationFailure,
  actionDeleteNotificationSuccess,
  actionGetAllNotifications,
  actionGetAllNotificationsFailure,
  actionGetAllNotificationsSuccess, actionGetAllPaginatedNotificationsSuccess,
  actionGetNewNotifications,
  actionGetNewNotificationsFailure,
  actionGetNewNotificationsSuccess,
  actionGetNotificationSettings,
  actionGetNotificationSettingsFailure,
  actionGetNotificationSettingsSuccess, actionOpenAllNotifications,
  actionReadNotification,
  actionReadNotificationFailure,
  actionReadNotificationSuccess, actionReceiveNewNotification,
  actionSendTestNotification,
  actionSendTestNotificationFailure,
  actionSendTestNotificationSuccess,
  actionUpdateNotificationSettings,
  actionUpdateNotificationSettingsFailure,
  actionUpdateNotificationSettingsSuccess,
} from '../actions';
import {NotificationsService} from '../../services';
import {selectNotificationsSettings} from '../selectors';
import {ToastrService} from 'ngx-toastr';
import {NotificationToasterComponent} from '../../components';
import {SupplementalPanelService} from '@arenaops/arena.ux/components/supplemental-panel';
import {NotificationPanelComponent} from '../../containers/notification-panel/notification-panel.component';

@Injectable()
export class NotificationsEffects {

  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService,
    private store$: Store<State>,
    private toastr: ToastrService,
    private supplementalPanelService: SupplementalPanelService,
  ) {
  }

  openAllNotifications$ = createEffect(() => this.actions$.pipe(
    ofType(actionOpenAllNotifications),
    withLatestFrom(this.store$.select(selectNotificationsSettings)),
    switchMap(([, settings]) => {
      this.store$.dispatch(actionGetAllNotifications({
        request: {
          perPage: settings.perPage,
          page: 1,
          state: 'unread',
        }
      }));

      const notificationsAllRef = this.supplementalPanelService.showComponent(NotificationPanelComponent, {
          position: 'left',
          width: 350,
        }
      );

      return notificationsAllRef.onHide;
    }),
    map(() => actionClosedAllNotifications()),
  ));

  getNotificationSettings$ = createEffect(() => this.actions$.pipe(
    ofType(actionGetNotificationSettings),
    concatMap(() => {
      return this.notificationsService.getNotificationSetting().pipe(
        map((settings) => {
          return actionGetNotificationSettingsSuccess({settings});
        }),
        catchError(error => of(actionGetNotificationSettingsFailure({error})))
      );
    }),
  ));

  getNotificationSettingsSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(actionGetNotificationSettingsSuccess),
    withLatestFrom(this.store$.select(selectNotificationsSettings)),
    mergeMap(([, settings]) => [
      actionGetNewNotifications({request: {state: 'unread', page: 1, perPage: settings.perPage}}),
    ]),
  ));

  updateNotificationSettings$ = createEffect(() => this.actions$.pipe(
    ofType(actionUpdateNotificationSettings),
    concatMap((param) => {
      return this.notificationsService.saveNotificationSetting(param.settings).pipe(
        map((settings) => {
          return actionUpdateNotificationSettingsSuccess({settings});
        }),
        catchError(error => of(actionUpdateNotificationSettingsFailure({error})))
      );
    }),
  ));

  updateNotificationSettingsSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(actionUpdateNotificationSettingsSuccess),
    withLatestFrom(this.store$.select(selectNotificationsSettings)),
    mergeMap(([, settings]) =>
      [
        actionGetNewNotifications({request: {perPage: settings.perPage, page: 1, state: 'unread'}}),
      ],
    ),
  ));

  readNotification$ = createEffect(() => this.actions$.pipe(
    ofType(actionReadNotification),
    concatMap((params) => {
      return this.notificationsService.readNotification(params.ID).pipe(
        map(() => {
          return actionReadNotificationSuccess(params);
        }),
        catchError(error => of(actionReadNotificationFailure({error})))
      );
    }),
  ));

  archiveNotification$ = createEffect(() => this.actions$.pipe(
    ofType(actionArchiveNotification),
    concatMap((params) => {
      return this.notificationsService.archiveNotification(params.ID).pipe(
        map(() => {
          return actionArchiveNotificationSuccess(params);
        }),
        catchError(error => of(actionArchiveNotificationFailure({error})))
      );
    }),
  ));

  deleteNotification$ = createEffect(() => this.actions$.pipe(
    ofType(actionDeleteNotification),
    concatMap((params) => {
      return this.notificationsService.deleteNotification(params.ID).pipe(
        map(() => {
          return actionDeleteNotificationSuccess(params);
        }),
        catchError(error => of(actionDeleteNotificationFailure({error})))
      );
    }),
  ));

  getNewNotifications$ = createEffect(() => this.actions$.pipe(
    ofType(actionGetNewNotifications),
    withLatestFrom(this.store$.select(selectNotificationsSettings)),
    concatMap(([params, settings]) => {
      return this.notificationsService.getNotifications(params.request).pipe(
        map(response => {
          return actionGetNewNotificationsSuccess({response});
        }),
        catchError(error => of(actionGetNewNotificationsFailure({error})))
      );
    }),
  ));

  getAllNotifications$ = createEffect(() => this.actions$.pipe(
    ofType(actionGetAllNotifications),
    concatMap((params) => {
      return this.notificationsService.getNotifications(params.request).pipe(
        map(response => {
          if (response.meta.currentPage === 1) {
            return actionGetAllNotificationsSuccess({response});
          }

          return actionGetAllPaginatedNotificationsSuccess({response});
        }),
        catchError(error => of(actionGetAllNotificationsFailure({error})))
      );
    }),
  ));

  actionSendTestNotification$ = createEffect(() => this.actions$.pipe(
    ofType(actionSendTestNotification),
    concatMap(() => {
      return this.notificationsService.sendNotification().pipe(
        map(() => {
          return actionSendTestNotificationSuccess();
        }),
        catchError(error => of(actionSendTestNotificationFailure({error})))
      );
    }),
  ));

  actionReceiveNewNotification$ = createEffect(() => this.actions$.pipe(
    ofType(actionReceiveNewNotification),
    withLatestFrom(this.store$.select(selectNotificationsSettings)),
    map(([params, settings]) => {
      const toastrOptions = this.toastr.toastrConfig;

      toastrOptions.toastComponent = NotificationToasterComponent;
      toastrOptions.toastClass = 'notyf confirm';
      toastrOptions.positionClass = settings.position;
      toastrOptions.timeOut = settings.showTime * 1000;

      this.toastr.show(
        params.notification.notificationMemo, params.notification.notificationName, toastrOptions
      );

      return actionGetNewNotifications({request: {state: 'unread', page: 1, perPage: settings.perPage}});
    }),
  ));
}
