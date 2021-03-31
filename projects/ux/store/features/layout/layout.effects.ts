import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../state';
import {Actions} from '@ngrx/effects';

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<State>,
  ) {
  }
}
