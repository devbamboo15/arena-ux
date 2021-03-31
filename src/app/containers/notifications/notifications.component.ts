import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  State
} from '@arenaops/arena.ux/store';
import {actionSendTestNotification, NotificationSettingsService} from '@arenaops/arena.ux/features/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  code1 = `
  import {NotificationsModule} from '@arenaops/arena.ux/features/notifications';

  @NgModule({
    imports: [
      NotificationsModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code2 = `
  <aux-notifications></aux-notifications>
  `;

  code3 = `
  ...
  constructor(private notificationSettingsService: NotificationSettingsService) {
  }

  showNotificationSettings() {
    this.notificationSettingsService.show();
  }
  ...
  `;

  constructor(
    private store$: Store<State>,
    private notificationSettingsService: NotificationSettingsService
  ) {
  }

  ngOnInit(): void {
  }

  sendTestNotification() {
    this.store$.dispatch(actionSendTestNotification());
  }

  showNotificationSettings() {
    this.notificationSettingsService.show();
  }

}
