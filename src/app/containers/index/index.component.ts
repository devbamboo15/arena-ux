import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  State,
  actionChangeTheme,
  Theme,
  selectTheme,
  actionLeftChangeSidebarState,
  SidebarState,
  actionLogout,
  actionRightChangeSidebarState
} from '@arenaops/arena.ux/store';
import {NotificationSettingsService} from '@arenaops/arena.ux/features/notifications';
import {NavMenuItem} from '@arenaops/arena.ux/panels';
import {Actions, ofType} from '@ngrx/effects';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy {

  theme: Theme;
  userItems = [
    {
      label: 'Profile',
      link: '/profile',
      iconCss: 'fad fa-user-crown',
    },
    {
      label: 'Notifications',
      onClick: () => {
        this.notificationSettingsService.show();
      },
      iconCss: 'fad fa-bells',
    },
  ];

  sideItems: NavMenuItem[] = [
    {
      label: 'Hello',
      path: '',
      iconClass: 'fas fa-circle',
    }
  ];

  setupMenuItems: NavMenuItem[] = [
    {
      label: 'Getting Started',
      path: '/',
      iconClass: 'fas fa-circle',
      tooltip: true,
    }
  ];

  layoutMenuItems: NavMenuItem[] = [
    {
      label: 'Layout',
      path: '/layout',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Navigation Panel',
      path: '/navigator',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Sidebar',
      path: '/sidebar',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Utility Panel',
      path: '/utility-panel',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Supplemental Panel',
      path: '/supplemental-panel',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
  ];

  featuresMenuItems: NavMenuItem[] = [
    {
      label: 'Notifications',
      path: '/notifications',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'User',
      path: '/user',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Support Desk',
      path: '/support-desk',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
  ];

  componentMenuItems: NavMenuItem[] = [
    {
      label: 'Cropper',
      path: '/cropper',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Autosize',
      path: '/autosize',
      tooltip: true,
    },
    {
      label: 'Autocomplete',
      path: '/autocomplete',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Avatars',
      path: '/avatars',
      tooltip: true,
      iconClass: 'fas fa-circle'
    },
    {
      label: 'Badges',
      path: '/badges',
      tooltip: true,
      iconClass: 'fas fa-circle'
    },
    {
      label: 'Breadcrumbs',
      path: '/breadcrumbs',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Buttons',
      path: '/buttons',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Button Group',
      path: '/button-group',
      tooltip: true,
    },
    {
      label: 'Cards',
      path: '/cards',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Carousel',
      path: '/carousel',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Charts',
      path: '/charts',
      tooltip: true,
    },
    {
      label: 'Checklist',
      path: '/checklist',
      tooltip: true,
    },
    {
      label: 'Dropdowns',
      path: '/dropdowns',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Forms',
      path: '/forms',
      tooltip: true,
      iconClass: 'fas fa-circle'
    },
    {
      label: 'Icons',
      path: '/icons',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Kanban',
      path: '/kanban',
      tooltip: true,
    },
    {
      label: 'Lists',
      path: '/lists',
      tooltip: true,
      iconClass: 'fas fa-circle'
    },
    {
      label: 'Map',
      path: '/map',
      tooltip: true,
    },
    {
      label: 'Modal',
      path: '/modals',
      tooltip: true,
      iconClass: 'fas fa-circle'
    },
    {
      label: 'Navs',
      path: '/navs',
      tooltip: true,
    },
    {
      label: 'Navbar',
      path: '/navbar',
      tooltip: true,
    },
    {
      label: 'Page Headers',
      path: '/headers',
      tooltip: true,
      iconClass: 'fas fa-circle'
    },
    {
      label: 'Pagination',
      path: '/pagination',
      tooltip: true,
    },
    {
      label: 'Popovers',
      path: '/popovers',
      tooltip: true,
    },
    {
      label: 'Progress',
      path: '/progress',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Social Post',
      path: '/social-post',
      tooltip: true,
    },
    {
      label: 'Spinners',
      path: '/spinners',
      tooltip: true,
    },
    {
      label: 'Tables',
      path: '/table',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Toasts',
      path: '/toasts',
      tooltip: true,
    },
    {
      label: 'Tooltips',
      path: '/tooltips',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Typography',
      path: '/typography',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
    {
      label: 'Utilities',
      path: '/utilities',
      tooltip: true,
    },
    {
      label: 'Stepper',
      path: '/stepper',
      iconClass: 'fas fa-circle',
      tooltip: true,
    },
  ];

  constructor(private store$: Store<State>, private action$: Actions,
              private notificationSettingsService: NotificationSettingsService) {
  }

  public sortNavs(navs: NavMenuItem[]) {
    return navs.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });
  }

  ngOnInit() {
    this.store$.select(selectTheme).subscribe(theme => this.theme = theme);
    this.action$.pipe(
      ofType(actionLogout),
    )
      .subscribe(() => {
        this.store$.dispatch(actionLeftChangeSidebarState({panelState: SidebarState.HIDDEN}));
        this.store$.dispatch(actionRightChangeSidebarState({panelState: SidebarState.HIDDEN}));
      });
  }

  public changeTheme(): void {
    if (this.theme === Theme.DUSK) {
      this.store$.dispatch(actionChangeTheme({
        theme: Theme.DAWN
      }));
    } else {
      this.store$.dispatch(actionChangeTheme({
        theme: Theme.DUSK
      }));
    }

  }

  ngOnDestroy() {
  }

}
