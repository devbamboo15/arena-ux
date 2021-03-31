import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {State, StoreConfiguration, selectGetToken} from '@arenaops/arena.ux/store';
import {Injectable} from '@angular/core';
import Pusher from 'pusher-js';
import {Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {first, map} from 'rxjs/operators';
import {NotificationsResponse, Notification, NotificationsSettings, NotificationRequest} from '../models';

const PUSHER_API_KEY = 'f88dc86a3f701150b191';
const PUSHER_CLUSTER = 'us2';

@Injectable()
export class NotificationsService {

  private subject: Subject<Notification> = new Subject<Notification>();
  private pusherClient: Pusher;

  constructor(private http: HttpClient,
              private store$: Store<State>,
              private storeConfiguration: StoreConfiguration) {
  }

  getNotifications(request: NotificationRequest): Observable<NotificationsResponse> {
    const project = this.storeConfiguration.project === 'ux' ? 'office' : this.storeConfiguration.project;

    let params = new HttpParams()
      .set('per_page', `${request.perPage}`)
      .set('app', `${project}`)
      .set('page', `${request.page}`);

    if (request.state !== null) {
      params = params.set('notification_state', `${request.state}`);
    }

    return this.http
      .get(`user/notifications`, {params}).pipe(
        map(response => new NotificationsResponse(response))
      );
  }

  archiveNotification(notificationID: string) {
    return this.http
      .patch<any>(`user/notification/${notificationID}/archive`, {});
  }

  deleteNotification(notificationID: string) {
    return this.http
      .delete<any>(`user/notifications?notifications[]=${notificationID}`, {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      });
  }

  readNotification(notificationID: string) {
    return this.http
      .patch<any>(`user/notification/${notificationID}/read`, {});
  }

  getNotificationSetting() {
    return this.http.get<any>(`user/notification/setting`).pipe(map(res => {
      return new NotificationsSettings(res.data);
    }));
  }

  saveNotificationSetting(settings: NotificationsSettings) {
    const body = NotificationsSettings.serialize(settings);
    return this.http
      .patch<any>(`user/notification/setting`, body, {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }).pipe(map(res => {
        return new NotificationsSettings(res.data);
      }));
  }

  sendNotification() {
    return this.http.get<any>(`test/notifications`);
  }

  listen() {
    this.subject = new Subject<Notification>();
    const project = this.storeConfiguration.project.toLowerCase() === 'ux' ? 'office' : this.storeConfiguration.project;

    this.store$.select(selectGetToken).pipe(
      first(),
      map(token => {
        this.pusherClient = new Pusher(PUSHER_API_KEY, {
          authEndpoint: `${this.storeConfiguration.apiURL}broadcasting/auth`,
          cluster: PUSHER_CLUSTER,
          forceTLS: true,
          auth: {
            params: {},
            headers: {
              Authorization: `Bearer ${token.auth.access_token}`,
            },
          },
        });

        const channel = this.pusherClient.subscribe(
          `private-channel.app.${project}.user.${token.user}`
        );

        channel.bind(`Notify.User.${token.user}`, (data) => {
          this.subject.next(new Notification(data));
        });
      }),
    ).subscribe();

    return this.subject.asObservable();
  }
}
