import {Component, OnInit} from '@angular/core';
import * as fromStore from '@arenaops/arena.ux/store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'aux-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private store$: Store<fromStore.State>
  ) {
  }

  ngOnInit(): void {
    this.store$.dispatch(fromStore.actionGetCurrentUser());
  }

}
