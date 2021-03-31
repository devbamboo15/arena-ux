import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import * as store from '@arenaops/arena.ux/store';

export class MenuItem {
  iconCss: string;
  label: string;
  onClick?: any;
  link?: string;
}

@Component({
  selector: 'aux-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {

  @Input()
  signInURL: string;

  @Input()
  signUpURL: string;

  @Input()
  items: MenuItem[] = [];

  profile$ = this.store$.select(store.selectProfile);
  isAuthorized$ = this.store$.select(store.selectHasPermission);

  constructor(public storeConfiguration: store.StoreConfiguration, private store$: Store<store.State>) {
  }

  ngOnInit() {
    this.isAuthorized$.subscribe(isAuthorized => {
      if (isAuthorized) {
        this.store$.dispatch(store.actionGetCurrentUser());
      }
    });
  }

  ngOnDestroy() {
  }

  logout() {
    this.store$.dispatch(store.actionLogout());
  }

}
