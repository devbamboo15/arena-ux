import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from '@arenaops/arena.ux/components/breadcrumbs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
})
export class GettingStartedComponent implements OnInit {

  code1 = `
    "@angular/animations": "^11.1.1",
    "@angular/common": "~11.1.1",
    "@angular/core": "~11.1.1",
    "@angular/forms": "~11.1.1",
    "@angular/localize": "~11.1.1",
    "@angular/platform-browser": "~11.1.1",
    "@angular/platform-browser-dynamic": "~11.1.1",
    "@angular/router": "~11.1.1",
    "@auth0/angular-jwt": "^5.0.1",
    "@ng-select/ng-select": "^5.0.3",
    "@ngrx/effects": "^11.0.0-beta.1",
    "@ngrx/entity": "^11.0.0-beta.1",
    "@ngrx/router-store": "^11.0.0-beta.1",
    "@ngrx/store": "^11.0.0-beta.1",
    "@ngrx/store-devtools": "^11.0.0-beta.1",
    "@swimlane/ngx-datatable": "^19.0.0",
    "bootstrap": "^4.5.3",
    "cropperjs": "^1.5.7",
    "ngx-bootstrap": "^6.2.0",
    "ngx-infinite-scroll": "^10.0.1",
    "ngx-spinner": "^10.0.1",
    "ngx-toastr": "^13.1.0",
    "pusher-js": "^7.0.1",
    "ngx-timeago": "^2.0.0",
  `;

  code2 = `
  npm i @arenaops/arena.ux@latest
  `;

  code3 = `
  import {AppModule as ArenaAppModule} from '@arenaops/arena.ux/components/app';

  @NgModule({
    imports: [
      ArenaAppModule,

      // Additionally you will need import and configure StoreModule
      StoreModule.forRoot({
        apiURL: environment.apiUrl,
        platform: 'Web',
        project: 'Ux',
        production: environment.production,
        signInURL: 'sign-in',
      }),
      ...
    ]
  })
  export class AppModule(){}
  `;

  code4 = `
  <aux-app></aux-app>
  `;

  code5 = `
  @import "~@arenaops/arena.ux/assets/styles/main";
  @import "~@arenaops/arena.ux/assets/styles/font-awesome/css/all.min.css";
  `;

  constructor(private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit() {
    this.breadcrumbsService.set(this.router.url, [
      {label: 'UX', url: '/'},
      {label: 'Getting Started', url: '/'},
    ]);
  }

}
