import {createAction, props} from '@ngrx/store';
import {NavigationExtras} from '@angular/router';

export const actionGo = createAction('[Router] Go', props<{ path: string, extras?: NavigationExtras }>());
