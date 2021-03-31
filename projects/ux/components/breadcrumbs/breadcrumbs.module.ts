import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbsComponent} from './breadcrumbs.component';
import {RouterModule} from '@angular/router';
import {BreadcrumbsConfiguration} from './breadcrumbs-configuration';

@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent
  ],
  providers: []
})
export class BreadcrumbsModule {
  static forRoot(params: BreadcrumbsConfiguration): ModuleWithProviders<BreadcrumbsModule> {
    return {
      ngModule: BreadcrumbsModule,
      providers: [
        {
          provide: BreadcrumbsConfiguration,
          useValue: params
        }
      ]
    };
  }
}
