import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from '@arenaops/arena.ux/components/breadcrumbs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  code11 = `
  import {BreadcrumbsModule} from '@arenaops/arena.ux/components/breadcrumbs';

  @NgModule({
    imports: [
      BreadcrumbsModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code12 = `
  <aux-breadcrumbs></aux-breadcrumbs>
  `;

  code21 = `
  import {BreadcrumbsService} from '@arenaops/arena.ux/components/breadcrumbs';
  ...

  constructor(private breadcrumbsService: BreadcrumbsService) {
  }
  ...
  `;

  code22 = `
  constructor(private router: Router,
      private breadcrumbsService: BreadcrumbsService) {
  }

  this.breadcrumbsService.set(this.router.url, [{label: 'Custom Detail', url: ''}]);
  `;

  code23 = `
  this.breadcrumbsService.append([{label: 'Custom Detail', url: ''}], false);
  `;

  constructor(private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit(): void {
    this.breadcrumbsService.set(this.router.url, [
      {label: 'UX', url: '/'},
      {label: 'Breadcrumbs', url: '/breadcrumbs'},
    ]);
  }

}
