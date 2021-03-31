import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  Notification, NotificationRequest, NotificationsMeta,
} from '../../models';

@Component({
  selector: 'aux-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent {

  @Input()
  public notifications: Notification[];

  @Input()
  public request: NotificationRequest;

  @Input()
  public meta: NotificationsMeta;

  @Input()
  public isLoading: boolean;

  @Output()
  public archive = new EventEmitter<string>();

  @Output()
  public delete = new EventEmitter<string>();

  @Output()
  public requested = new EventEmitter<NotificationRequest>();

  archiveNotification(notificationID: string) {
    this.archive.emit(notificationID);
  }

  deleteNotification(notificationID: string) {
    this.delete.emit(notificationID);
  }

  paginating() {
    if (this.meta.currentPage === this.meta.totalPages) {
      return;
    }
    this.requested.emit({...this.request, page: this.request.page + 1});
  }
}
