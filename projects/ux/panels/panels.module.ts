import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {
  ContentComponent,
  NavigationPanelComponent,
  SidebarComponent,
  SidebarConfig
} from './components';
import {PanelsService} from './services/panels.service';
import {NavComponent} from './components/nav';


@NgModule({
  declarations: [
    SidebarComponent,
    NavigationPanelComponent,
    ContentComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [
    SidebarComponent,
    NavigationPanelComponent,
    ContentComponent,
    NavComponent
  ],
  providers: [
    SidebarConfig,
    PanelsService
  ],
})
export class PanelsModule {
}
