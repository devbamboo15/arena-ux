import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {SupplementalPanelModule} from '@arenaops/arena.ux/components/supplemental-panel';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ToastrModule} from 'ngx-toastr';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {NotificationsService, NotificationSettingsService} from './services';
import {NotificationSettingsComponent} from './containers';
import {
  NotificationPlaceSelectorComponent,
  NotificationsSpinnerComponent,
  NotificationToasterComponent
} from './components';
import {NotificationsEffects} from './store/effects';
import {notificationsReducer} from './store/reducers';
import {NotificationPanelComponent} from './containers/notification-panel/notification-panel.component';
import {NotificationsListComponent} from './components/notifications-list/notifications-list.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {TimeagoModule} from 'ngx-timeago';

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationsListComponent,
    NotificationToasterComponent,
    NotificationSettingsComponent,
    NotificationPlaceSelectorComponent,
    NotificationPanelComponent,
    NotificationsSpinnerComponent
  ],
  imports: [
    CommonModule,
    SupplementalPanelModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ButtonsModule.forRoot(),
    StoreModule.forFeature('notifications', notificationsReducer),
    EffectsModule.forFeature([NotificationsEffects]),
    TimeagoModule.forRoot(),
  ],
  exports: [
    NotificationsComponent,
  ],
  entryComponents: [
    NotificationToasterComponent,
    NotificationSettingsComponent
  ],
  providers: [
    NotificationSettingsService,
    NotificationsService,
  ]
})
export class NotificationsModule {
}
