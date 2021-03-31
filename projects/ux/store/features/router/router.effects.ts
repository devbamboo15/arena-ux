import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {NavigationExtras, Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {State} from '../../state';
import {actionGo} from './router.actions';


@Injectable()
export class RouterEffects {

  constructor(private actions$: Actions, private store: Store<State>, private router: Router, ) {
  }

  go = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGo),
        tap(data => {
          const extras: NavigationExtras = {...data.extras};
          this.router.navigate([data.path], extras);
        })
      ),
    {dispatch: false}
  );
}
