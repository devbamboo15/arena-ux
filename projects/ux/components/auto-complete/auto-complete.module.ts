import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteComponent } from './auto-complete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AutoCompleteComponent, NgSelectModule]
})
export class AutoCompleteModule {
}
