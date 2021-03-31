import {createAction, props} from '@ngrx/store';
import {
  SidebarContext,
  SidebarState,
  Theme,
  Viewport
} from './layout.enum';

export const actionLeftSidebarEnabled = createAction('[Layout] Sidebar Left Enabled',
  props<{ enabled: boolean }>()
);

export const actionLeftChangeSidebarState = createAction('[Layout] Change Left Sidebar State',
  props<{ panelState: SidebarState }>()
);

export const actionRightSidebarEnabled = createAction('[Layout] Sidebar Right Enabled',
  props<{ enabled: boolean }>()
);

export const actionRightChangeSidebarState = createAction('[Layout] Change Right Sidebar State',
  props<{ panelState: SidebarState }>()
);

export const actionChangeTheme = createAction('[Layout] Change Theme',
  props<{ theme: Theme }>()
);
export const actionChangeViewport = createAction('[Layout] Change Viewport',
  props<{ viewport: Viewport }>()
);
