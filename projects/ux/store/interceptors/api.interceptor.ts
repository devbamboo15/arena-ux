import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../state';
import {JwtHelperService} from '@auth0/angular-jwt';
import {StoreConfiguration} from '../store-configuration';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap, take, map, filter, tap} from 'rxjs/operators';
import {actionRefreshToken} from '../features/auth';
import {selectGetToken} from '../features/auth';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private store$: Store<State>,
    private jwtHelperService: JwtHelperService,
    private storeConfiguration: StoreConfiguration,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url === 'core/auth/refresh') {
      return next.handle(this.addHeaders(req, null));
    }

    return this.store$.select(selectGetToken).pipe(
      map(tokenData => tokenData?.auth?.access_token ? tokenData?.auth?.access_token : ''),
      tap(token => {
        if (token && this.jwtHelperService.isTokenExpired(token)) {
          this.store$.dispatch(actionRefreshToken());
        }
      }),
      filter((token) => {
        return (!this.jwtHelperService.isTokenExpired(token) || !token);
      }),
      take(1),
      switchMap(token => {
        if (req.url.indexOf('.md') !== -1) {
          return next.handle(req);
        }

        req = this.addHeaders(req, token);

        return next.handle(req).pipe(catchError(err => {
          if (err.status === 401) {
            this.router.navigate([this.storeConfiguration.signInURL]).then(() => {
            });
            return throwError(err);
          }
          return throwError(err);
        }));
      })
    );
  }

  private addHeaders(req: HttpRequest<any>, token: string) {
    const project = this.storeConfiguration.project === 'Ux' ? 'Office' : this.storeConfiguration.project;

    let headers = new HttpHeaders();
    headers = headers.append('Cache-Control', 'no-cache');
    headers = headers.append('X-API', 'v1.0');
    headers = headers.append(
      'X-API-HOST',
      `App.Arena.${project}.${this.storeConfiguration.platform}`
    );

    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return req.clone({
      url: `${this.storeConfiguration.apiURL}${req.url}`,
      headers,
    });
  }

}
