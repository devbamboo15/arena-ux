import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupplementalPanelOptions} from './supplemental-panel.options';
import {SupplementalPanelComponent} from './supplemental-panel.component';
import {SupplementalPanelService} from './supplemental-panel.service';
import {SupplementalPanelRef} from './supplemental-panel-ref';

@NgModule({
  declarations: [
    SupplementalPanelComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SupplementalPanelOptions,
    SupplementalPanelService,
    SupplementalPanelRef
  ],
  exports: [
    SupplementalPanelComponent,
  ],
  entryComponents: [
    SupplementalPanelComponent,
  ]
})
export class SupplementalPanelModule {
}
