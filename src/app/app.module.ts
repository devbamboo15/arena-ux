import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppModule as UxAppModule} from '@arenaops/arena.ux/components/app';

import {IndexComponent} from './containers/index/index.component';
import {NavigatorComponent} from './containers/navigator/navigator.component';
import {GettingStartedComponent} from './containers/getting-started/getting-started.component';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {StepperComponent} from './containers/stepper/stepper.component';
import {TableComponent} from './containers/table/table.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LayoutComponent} from './containers/layout/layout.component';
import {CropperComponent} from './containers/cropper/cropper.component';
import {UserPanelComponent} from './containers/user-panel/user-panel.component';
import {UtilityPanelComponent} from './containers/utility-panel/utility-panel.component';
import {CardsComponent} from './containers/cards/cards.component';
import {CarouselComponent} from './containers/carousel/carousel.component';
import {ButtonsComponent} from './containers/buttons/buttons.component';
import {FormsComponent} from './containers/forms/forms.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {UserModule} from '@arenaops/arena.ux/features/user';
import {NotificationsModule} from '@arenaops/arena.ux/features/notifications';
import {BrandModule} from '@arenaops/arena.ux/components/brand';
import {CropperModule} from '@arenaops/arena.ux/components/cropper';
import {SupplementalPanelModule} from '@arenaops/arena.ux/components/supplemental-panel';
import {SupplementalPanelComponent} from './containers/supplemental-panel/supplemental-panel.component';
import {TableModule} from '@arenaops/arena.ux/components/table';
import {StepperModule} from '@arenaops/arena.ux/components/stepper';
import {UtilityPanelModule} from '@arenaops/arena.ux/components/utility-panel';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SignInComponent} from './containers/signin/signin.component';
import {environment} from '../environments/local';
import {StoreModule} from '@arenaops/arena.ux/store';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AutoCompleteModule} from '@arenaops/arena.ux/components/auto-complete';
import {SupportDeskModule} from '@arenaops/arena.ux/features/support';
import {ForgetPasswordComponent} from './containers/forget-password/forget-password.component';
import {PasswordResetModule} from '@arenaops/arena.ux/components/password-reset';
import {AutoCompleteComponent} from './containers/auto-complete/auto-complete.component';
import {NotificationsComponent} from './containers/notifications/notifications.component';
import {BreadcrumbsModule} from '@arenaops/arena.ux/components/breadcrumbs';
import {BreadcrumbComponent} from './containers/breadcrumb/breadcrumb.component';
import {DetailComponent} from './containers/breadcrumb/detail/detail.component';
import {ListComponent} from './containers/breadcrumb/list/list.component';
import {SupportDeskComponent} from './containers/support-desk/support-desk.component';
import {PanelsModule} from '@arenaops/arena.ux/panels';
import {UserComponent} from './containers/user/user.component';
import {SignUpComponent} from './containers/sign-up/sign-up.component';
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {ListsDocumentationComponent} from './containers/lists-documentation/lists-documentation.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BadgesDocumentationComponent} from './containers/badges-documentation/badges-documentation.component';
import {AvatarsDocumentationComponent} from './containers/avatars-documentation/avatars-documentation.component';
import {DropdownsDocumentationComponent} from './containers/dropdowns-documentation/dropdowns-documentation.component';
import {ModalsDocumentationComponent} from './containers/modals-documentation/modals-documentation.component';
import {PageHeadersDocumentationComponent} from './containers/page-headers-documentation/page-headers-documentation.component';
import {IconsDocumentationComponent} from './containers/icons-documentation/icons-documentation.component';
import {TypogrphyDocumentationComponent} from './containers/typogrphy-documentation/typogrphy-documentation.component';
import {ProgressDocumentationComponent} from './containers/progress-documentation/progress-documentation.component';
import {TooltipsDocumentationComponent} from './containers/tooltips-documentation/tooltips-documentation.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {TimeagoModule} from 'ngx-timeago';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SupportDeskComponent,

    // Component documentations
    GettingStartedComponent,
    NavigatorComponent,
    StepperComponent,
    TableComponent,
    LayoutComponent,
    CropperComponent,
    UserPanelComponent,
    UtilityPanelComponent,
    CardsComponent,
    CarouselComponent,
    ButtonsComponent,
    FormsComponent,
    SupplementalPanelComponent,
    SignInComponent,
    ForgetPasswordComponent,
    AutoCompleteComponent,
    BreadcrumbComponent,
    ListComponent,
    DetailComponent,
    NotificationsComponent,
    UserComponent,
    SignUpComponent,
    ListsDocumentationComponent,
    BadgesDocumentationComponent,
    AvatarsDocumentationComponent,
    DropdownsDocumentationComponent,
    ModalsDocumentationComponent,
    PageHeadersDocumentationComponent,
    IconsDocumentationComponent,
    TypogrphyDocumentationComponent,
    ProgressDocumentationComponent,
    TooltipsDocumentationComponent,
  ],
  entryComponents: [],
  imports: [

    StoreModule.forRoot({
      apiURL: environment.apiUrl,
      platform: 'Web',
      project: 'Ux',
      production: environment.production,
      signInURL: 'sign-in',
      signUpURL: 'sign-up'
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule,
    ReactiveFormsModule,

    // Ux Modules
    UxAppModule,
    PanelsModule,
    UserModule,
    NotificationsModule,
    BrandModule,
    CropperModule,
    SupplementalPanelModule,
    TableModule,
    StepperModule,
    UtilityPanelModule,
    NgSelectModule,
    AutoCompleteModule,
    SupportDeskModule,
    PasswordResetModule,
    BreadcrumbsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    HighlightModule,
    TimeagoModule.forRoot(),


    // SidePanelModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
    NgxDatatableModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  renderer.code = (code, language) => {
    if (language.match(/^mermaid/)) {
      return '<div class="mermaid">' + code + '</div>';
    } else if (language.match(/^html/)) {
      return `<pre class="language-${language}"><code class="language-${language}">${escapeHtml(code)}</code></pre>`;
    } else {
      return `<pre class="language-${language}"><code class="language-${language}">${code}</code></pre>`;
    }
  };
  return {
    renderer,
    gfm: true,
    // tables: true,
    breaks: false,
    pedantic: false,
    // sanitize: false,
    smartLists: true,
    smartypants: false
  };
}
