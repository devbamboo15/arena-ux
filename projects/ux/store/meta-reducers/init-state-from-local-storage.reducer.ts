import {ActionReducer, INIT, UPDATE} from '@ngrx/store';

import {State} from '../state';
import {LocalStorageService} from '../services';

export function initStateFromLocalStorage(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return {...newState, ...LocalStorageService.loadInitialState()};
    }
    return newState;
  };
}
