import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './toast.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ]
})
export class ToastModule {
}
