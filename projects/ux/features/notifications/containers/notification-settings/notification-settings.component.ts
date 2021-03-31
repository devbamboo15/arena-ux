import {
  Component, OnInit,
} from '@angular/core';
import * as store from '@arenaops/arena.ux/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {NotificationsSettings} from '../../models';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {selectIsUpdatingNotificationsSettings, selectNotificationsSettings} from '../../store/selectors';
import {actionUpdateNotificationSettings} from '../../store/actions';

@Component({
  selector: 'aux-notification-settings',
  templateUrl: './notification-settings.component.html',
  styleUrls: ['./notification-settings.component.scss']
})
export class NotificationSettingsComponent implements OnInit {

  settingsForm: FormGroup;
  settings$ = this.store$.select(selectNotificationsSettings);
  isUpdatingNotificationsSettings$ = this.store$.select(selectIsUpdatingNotificationsSettings);

  constructor(private fb: FormBuilder,
              public bsModalRef: BsModalRef,
              private store$: Store<store.State>) {
  }

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      flagAccount: this.fb.control(false, [Validators.required]),
      flagApparel: this.fb.control(false, [Validators.required]),
      flagArena: this.fb.control(false, [Validators.required]),
      flagCatalog: this.fb.control(false, [Validators.required]),
      flagUX: this.fb.control(false, [Validators.required]),
      flagMerchandising: this.fb.control(false, [Validators.required]),
      flagMusic: this.fb.control(false, [Validators.required]),
      flagOffice: this.fb.control(false, [Validators.required]),
      flagSoundBlock: this.fb.control(false, [Validators.required]),
      perPage: this.fb.control(0, [Validators.required]),
      playSound: this.fb.control(false, [Validators.required]),
      position: this.fb.control(0, [Validators.required]),
      showTime: this.fb.control(0, [Validators.required]),
    });

    this.settings$.subscribe((settings: NotificationsSettings) => {
      this.settingsForm.patchValue(settings);
    });
  }

  save(settings: NotificationsSettings, isValid) {
    if (!isValid) {
      return;
    }

    this.store$.dispatch(actionUpdateNotificationSettings({settings}));
  }

  close() {
    this.bsModalRef.hide();
  }
}
