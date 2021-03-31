import {Component, OnInit} from '@angular/core';
import * as fromStore from '@arenaops/arena.ux/store';
import {Store} from '@ngrx/store';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'aux-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public profile$ = this.store$.select(fromStore.selectProfile);

  public postals$: fromStore.PostalInfo[];
  public postalType = ['Home', 'Office', 'Billing', 'Other'];
  form: FormGroup;
  public uuid: string;

  constructor(private store$: Store<fromStore.State>) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      postalCity: new FormControl(''),
      postalStreet: new FormControl(''),
      postalCountry: new FormControl(''),
      postalType: new FormControl(''),
      postalZipcode: new FormControl('')
    });
  }

  public addPostal(): void {
    this.store$.dispatch(fromStore.actionCurrentUserAddPostal({
      postal: this.form.value,
    }));
    this.form.reset();
  }

  public deletePostal(postalId: string): void {
    if (confirm('Are You sure You want to delete Address?')) {
      this.store$.dispatch(fromStore.actionCurrentUserDeletePostal({
        postal: postalId,
      }));
    }
  }

}
