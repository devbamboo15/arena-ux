import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {selectHasPermission} from '../features/auth';
import {State} from '../state';
import {actionGo} from '../features/router';
import {StoreConfiguration} from '../store-configuration';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store$: Store<State>,
              private storeConfiguration: StoreConfiguration) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store$.pipe(
      select(selectHasPermission),
      map(hasPermission => {
        if (!hasPermission) {
          this.store$.dispatch(actionGo({path: this.storeConfiguration.signInURL}));
          return false;
        }
        return true;
      })
    );
  }
}
