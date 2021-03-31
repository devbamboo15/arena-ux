import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NotificationSettingsComponent} from '../containers/notification-settings/notification-settings.component';

@Injectable()
export class NotificationSettingsService {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  show() {
    this.bsModalRef = this.modalService.show(NotificationSettingsComponent, {});
  }

  hide() {
    this.bsModalRef.hide();
  }
}
