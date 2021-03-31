import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgSelectModule} from '@ng-select/ng-select';
import {FileSizePipe} from './size';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {NgxSpinnerModule} from 'ngx-spinner';
import {SupportComponent} from './components/support/support.component';
import {SupplementalPanelModule} from '@arenaops/arena.ux/components/supplemental-panel';
import {SupportDeskComponent} from './components/support-desk/support-desk.component';

@NgModule({
  declarations: [
    SupportDeskComponent,
    SupportComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
    TooltipModule.forRoot(),
    NgxSpinnerModule,
    SupplementalPanelModule
  ],
  exports: [
    SupportDeskComponent,
    SupportComponent
  ]
})
export class SupportDeskModule {
}
