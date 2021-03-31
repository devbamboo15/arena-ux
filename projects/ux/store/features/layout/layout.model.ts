import {SidebarState} from './layout.enum';

export class Sidebars {
  right: Sidebar = {enabled: false, state: SidebarState.HIDDEN};
  left: Sidebar = {enabled: false, state: SidebarState.HIDDEN};
}

export class Sidebar {
  enabled = false;
  state: SidebarState = SidebarState.HIDDEN;
}
