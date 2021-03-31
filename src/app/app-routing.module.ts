import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './containers/index/index.component';
import {GettingStartedComponent} from './containers/getting-started/getting-started.component';
import {NavigatorComponent} from './containers/navigator/navigator.component';
import {StepperComponent} from './containers/stepper/stepper.component';
import {TableComponent} from './containers/table/table.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {CropperComponent} from './containers/cropper/cropper.component';
import {UserPanelComponent} from './containers/user-panel/user-panel.component';
import {UtilityPanelComponent} from './containers/utility-panel/utility-panel.component';
import {CardsComponent} from './containers/cards/cards.component';
import {CarouselComponent} from './containers/carousel/carousel.component';
import {ButtonsComponent} from './containers/buttons/buttons.component';
import {FormsComponent} from './containers/forms/forms.component';
import {SupplementalPanelComponent} from './containers/supplemental-panel/supplemental-panel.component';
import {SignInComponent} from './containers/signin/signin.component';
import {AuthGuard} from '@arenaops/arena.ux/store';
import {ForgetPasswordComponent} from './containers/forget-password/forget-password.component';
import {NotificationsComponent} from './containers/notifications/notifications.component';
import {AutoCompleteComponent} from './containers/auto-complete/auto-complete.component';
import {BreadcrumbComponent} from './containers/breadcrumb/breadcrumb.component';
import {ListComponent} from './containers/breadcrumb/list/list.component';
import {DetailComponent} from './containers/breadcrumb/detail/detail.component';
import {SupportDeskComponent} from './containers/support-desk/support-desk.component';
import {UserComponent} from './containers/user/user.component';
import {SignUpComponent} from './containers/sign-up/sign-up.component';
import {ListsDocumentationComponent} from './containers/lists-documentation/lists-documentation.component';
import {BadgesDocumentationComponent} from './containers/badges-documentation/badges-documentation.component';
import {AvatarsDocumentationComponent} from './containers/avatars-documentation/avatars-documentation.component';
import {DropdownsDocumentationComponent} from './containers/dropdowns-documentation/dropdowns-documentation.component';
import {ModalsDocumentationComponent} from './containers/modals-documentation/modals-documentation.component';
import {PageHeadersDocumentationComponent} from './containers/page-headers-documentation/page-headers-documentation.component';
import {TypogrphyDocumentationComponent} from './containers/typogrphy-documentation/typogrphy-documentation.component';
import {TooltipsDocumentationComponent} from './containers/tooltips-documentation/tooltips-documentation.component';
import {ProgressDocumentationComponent} from './containers/progress-documentation/progress-documentation.component';
import {IconsDocumentationComponent} from './containers/icons-documentation/icons-documentation.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: GettingStartedComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cropper',
        component: CropperComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'layout',
        component: LayoutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'forms',
        component: FormsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'avatars',
        component: AvatarsDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'badges',
        component: BadgesDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dropdowns',
        component: DropdownsDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'modals',
        component: ModalsDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'headers',
        component: PageHeadersDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'typography',
        component: TypogrphyDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'progress',
        component: ProgressDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tooltips',
        component: TooltipsDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'icons',
        component: IconsDocumentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'sidebar',
        component: UserPanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'profile',
        loadChildren: () => import('@arenaops/arena.ux/features/user').then(m => m.UserModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'supplemental-panel',
        component: SupplementalPanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'support-desk',
        component: SupportDeskComponent,
        canActivate: [AuthGuard]

      },
      {
        path: 'utility-panel',
        component: UtilityPanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'navigator',
        component: NavigatorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'stepper',
        component: StepperComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'table',
        component: TableComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cards',
        component: CardsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'lists',
        component: ListsDocumentationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'breadcrumbs',
        component: BreadcrumbComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'list',
            component: ListComponent,
            children: [
              {
                path: 'detail',
                component: DetailComponent,
              }
            ]
          },
        ]
      },
      {
        path: 'carousel',
        component: CarouselComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'password-reset/:reset-id',
        component: ForgetPasswordComponent,
      },
      {
        path: 'autocomplete',
        component: AutoCompleteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'support-desk',
        component: SupportDeskComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
