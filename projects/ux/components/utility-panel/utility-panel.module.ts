import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityPanelComponent} from './utility-panel.component';
import {StoreModule as NGRXModule} from '@ngrx/store';
import {layoutReducer} from '@arenaops/arena.ux/store';


@NgModule({
  declarations: [
    UtilityPanelComponent
  ],
  imports: [
    CommonModule,
    NGRXModule.forFeature('layout', layoutReducer)
  ],
  exports: [
    UtilityPanelComponent
  ]
})
export class UtilityPanelModule {
}
