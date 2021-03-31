import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {TableComponent} from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    BsDropdownModule
  ],
  exports: [TableComponent],
  providers: []
})
export class TableModule {
}
