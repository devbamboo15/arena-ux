import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent, SignUpComponent, UserComponent} from './components';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RouterModule} from '@angular/router';
import {AccountNumberPipe} from './account-number';
import {
  AddressComponent,
  ContactComponent,
  IndexComponent,
  PaymentComponent,
  ProfileComponent
} from './containers';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    AccountNumberPipe,
    IndexComponent,
    PaymentComponent,
    ContactComponent,
    AddressComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule,
    NgSelectModule,
  ],
  exports: [
    UserComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class UserModule {
}
