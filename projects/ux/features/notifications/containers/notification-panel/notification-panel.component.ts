import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Notification, NotificationRequest, NotificationsMeta} from '../../models';
import {
  selectAllNotifications, selectAllNotificationsMeta,
  selectAllNotificationsRequest,
  selectIsAllGetNotificationsLoading
} from '../../store/selectors';
import {Store} from '@ngrx/store';
import {State} from '@arenaops/arena.ux/store';
import {actionArchiveNotification, actionDeleteNotification, actionGetAllNotifications} from '../../store/actions';

@Component({
  selector: 'aux-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent implements OnInit {

  public _status = 'unread';

  panelRef: any;

  public allNotifications$: Observable<Notification[]> = this.store$.select(selectAllNotifications);
  public allNotificationRequest$: Observable<NotificationRequest> = this.store$.select(selectAllNotificationsRequest);
  public allNotificationMeta$: Observable<NotificationsMeta> = this.store$.select(selectAllNotificationsMeta);
  public isGetAllNotificationsLoading$: Observable<boolean> = this.store$.select(selectIsAllGetNotificationsLoading);

  constructor(
    private store$: Store<State>) {
  }

  ngOnInit(): void {
  }

  set status(status) {
    this._status = status;

    this.store$.dispatch(actionGetAllNotifications({
      request: {
        state: status,
        page: 1,
        perPage: 10,
      }
    }));
  }

  get status(): any {
    return this._status;
  }

  archiveNotification(ID: string) {
    this.store$.dispatch(actionArchiveNotification({ID}));
  }

  deleteNotification(ID: string) {
    this.store$.dispatch(actionDeleteNotification({ID}));
  }

  requestNotifications(request: NotificationRequest) {
    this.store$.dispatch(actionGetAllNotifications({
      request
    }));
  }

}
