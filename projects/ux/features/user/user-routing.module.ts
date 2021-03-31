import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  AddressComponent,
  ContactComponent,
  IndexComponent,
  PaymentComponent,
  ProfileComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
