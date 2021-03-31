import {createSelector} from '@ngrx/store';
import {State} from '../../state';
import {LayoutState} from './layout.reducer';

export const selectLayoutState = (state: State) => state.layout;

export const selectTheme = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.theme
);

export const selectViewport = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.viewport
);

export const selectLeftSidebarEnabled = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.leftSidebarEnabled
);

export const selectLeftSidebarState = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.leftSidebarState
);

export const selectPrevLeftSidebarState = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.prevLeftSidebarState
);

export const selectRightSidebarEnabled = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.rightSidebarEnabled
);

export const selectRightSidebarState = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.rightSidebarState
);

export const selectPrevRightSidebarState = createSelector(
  selectLayoutState,
  (state: LayoutState) => state.prevRightSidebarState
);
