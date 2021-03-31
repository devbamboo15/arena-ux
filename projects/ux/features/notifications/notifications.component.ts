import {Component, OnInit} from '@angular/core';
import {SupplementalPanelRef} from '@arenaops/arena.ux/components/supplemental-panel';
import {Store} from '@ngrx/store';
import {
  selectViewport,
  State,
  StoreConfiguration,
  selectHasPermission,
  Viewport
} from '@arenaops/arena.ux/store';
import {Observable} from 'rxjs';
import {NotificationsService} from './services';
import {Notification} from './models';
import {
  selectIsNewGetNotificationsLoading,
  selectNewNotifications
} from './store/selectors';
import {
  actionArchiveNotification, actionDeleteNotification,
  actionGetNotificationSettings, actionOpenAllNotifications,
  actionReceiveNewNotification
} from './store/actions';

@Component({
  selector: 'aux-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  public showDD = true;

  public newNotifications$: Observable<Notification[]> = this.store$.select(selectNewNotifications);
  public isGetNewNotificationsLoading$: Observable<boolean> = this.store$.select(selectIsNewGetNotificationsLoading);
  public isAuthorized$ = this.store$.select(selectHasPermission);
  public viewport$ = this.store$.select(selectViewport);

  constructor(
    private store$: Store<State>,
    private storeConfiguration: StoreConfiguration,
    private notificationsService: NotificationsService,
  ) {
  }

  ngOnInit() {
    this.isAuthorized$.subscribe(isAuthorized => {
      if (isAuthorized) {
        this.initNotificationsData();
        this.initNotificationsListener();
      }
    });

    this.viewport$.subscribe(vp => {
      const dpVPs = [Viewport.XS, Viewport.VS, Viewport.SM];

      this.showDD = !dpVPs.includes(vp);
    });
  }

  initNotificationsData() {
    this.store$.dispatch(actionGetNotificationSettings());
  }

  initNotificationsListener() {
    // @todo move to effect
    this.notificationsService.listen().subscribe((notification: any) => {
      this.store$.dispatch(actionReceiveNewNotification({notification}));
    });
  }

  openAll() {
    this.store$.dispatch(actionOpenAllNotifications());
  }

  archiveNotification(ID: string) {
    this.store$.dispatch(actionArchiveNotification({ID}));
  }

  deleteNotification(ID: string) {
    this.store$.dispatch(actionDeleteNotification({ID}));
  }

}
