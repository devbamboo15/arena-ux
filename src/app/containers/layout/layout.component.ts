import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from '@arenaops/arena.ux/components/breadcrumbs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  code1 = `
  import {PanelsModule} from '@arenaops/arena.ux/panels';

  @NgModule({
    imports: [
      PanelsModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code2 = `
  <aux-navigation-panel>
    <ng-container start>
      <aux-brand project="ux"></aux-brand>
    </ng-container>
    <ng-container end>
      <aux-user></aux-user>
    </ng-container>
  </aux-navigation-panel>

  <aux-sidebar context="left">
    <h6>Setup</h6>
    <aux-nav [items]="setupMenuItems"></aux-nav>
    <h6>Layout</h6>
    <aux-nav [items]="layoutMenuItems"></aux-nav>
    <h6>Components</h6>
    <aux-nav [items]="componentMenuItems"></aux-nav>
  </aux-sidebar>
  <aux-sidebar context="right">
    <aux-nav [items]="sideItems"></aux-nav>
  </aux-sidebar>

  <aux-content>
    <router-outlet></router-outlet>
  </aux-content>
  `;

  constructor(private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit() {
    this.breadcrumbsService.set(this.router.url, [
      {label: 'UX', url: '/'},
      {label: 'Layout', url: '/layout'},
    ]);
  }

}
