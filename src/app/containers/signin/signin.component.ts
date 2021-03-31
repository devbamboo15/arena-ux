import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { actionGetUserPermissionSuccess, actionLeftChangeSidebarState, SidebarState } from '@arenaops/arena.ux/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  private signedIn$ = new Subject<boolean>();
  constructor(private action$: Actions, private store$: Store) {
  }

  ngOnInit() {
    this.store$.dispatch(actionLeftChangeSidebarState({panelState: SidebarState.HIDDEN}));
    this.action$.pipe(
      ofType(actionGetUserPermissionSuccess),
    ).subscribe(() => {
        this.store$.dispatch(actionLeftChangeSidebarState({ panelState: SidebarState.RESET }));
      });
  }

}
