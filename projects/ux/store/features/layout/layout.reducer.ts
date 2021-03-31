import {
  actionChangeTheme,
  actionChangeViewport,
  actionLeftChangeSidebarState,
  actionLeftSidebarEnabled,
  actionRightChangeSidebarState,
  actionRightSidebarEnabled,
} from './layout.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {SidebarState, Theme, Viewport} from './layout.enum';

export interface LayoutState {
  viewport: Viewport;
  leftSidebarState: SidebarState;
  prevLeftSidebarState: SidebarState;
  rightSidebarState: SidebarState;
  prevRightSidebarState: SidebarState;
  leftSidebarEnabled: boolean;
  rightSidebarEnabled: boolean;
  theme: Theme;
}

export const initialState: LayoutState = {
  viewport: Viewport.XS,
  leftSidebarState: SidebarState.HIDDEN,
  prevLeftSidebarState: SidebarState.HIDDEN,
  rightSidebarState: SidebarState.HIDDEN,
  prevRightSidebarState: SidebarState.HIDDEN,
  leftSidebarEnabled: false,
  rightSidebarEnabled: false,
  theme: Theme.DUSK
};

const reducer = createReducer(
  initialState,
  on(actionChangeTheme, (state, {theme}) =>
    ({...state, theme})),
  on(actionChangeViewport, (state, {viewport}) =>
    ({...state, viewport})),
  on(actionRightChangeSidebarState, (state, {panelState}) =>
    ({...state, prevRightSidebarState: state.rightSidebarState, rightSidebarState: panelState})),
  on(actionRightSidebarEnabled, (state, {enabled}) =>
    ({...state, rightSidebarEnabled: enabled})),
  on(actionLeftChangeSidebarState, (state, {panelState}) =>
    ({...state, prevLeftSidebarState: state.leftSidebarState, leftSidebarState: panelState})),
  on(actionLeftSidebarEnabled, (state, {enabled}) =>
    ({...state, leftSidebarEnabled: enabled})),
);

export function layoutReducer(state: LayoutState | undefined, action: Action) {
  return reducer(state, action);
}
