import {Component, OnInit} from '@angular/core';
import * as fromStore from '@arenaops/arena.ux/store';
import {Store} from '@ngrx/store';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'aux-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public profile$ = this.store$.select(fromStore.selectProfile);

  public bankings$: fromStore.Bankings[];
  public paypals$: fromStore.PayPals[];
  public isAddAccount = false;
  public isAddPaypal = false;
  public accountForm: FormGroup;
  public paypalForm: FormGroup;
  public accountTypes = ['Checking', 'Saving'];

  constructor(private store$: Store<fromStore.State>) {
  }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      accountNumber: new FormControl(''),
      routingNumber: new FormControl(''),
      accountType: new FormControl(''),
      bankName: new FormControl('')
    });
    this.paypalForm = new FormGroup({
      paypal: new FormControl('')
    });
  }

  public addAccountToggle(): void {
    this.isAddAccount = !this.isAddAccount;
    this.isAddPaypal = false;
  }

  public addPaypalToggle(): void {
    this.isAddPaypal = !this.isAddPaypal;
    this.isAddAccount = false;
  }

  public addAccount(): void {
    this.store$.dispatch(fromStore.actionCurrentUserAddBankAccount({
      bankAccount: this.accountForm.value,
    }));
    this.accountForm.reset();
  }

  public addPaypal(): void {
    this.store$.dispatch(fromStore.actionCurrentUserAddPaypal({
      paypal: this.paypalForm.value
    }));
    this.paypalForm.reset();
  }

  public onAccountSelect(type: string, paymentMethod: string): void {
    this.store$.dispatch(fromStore.actionCurrentUserSetPrimaryPayment({
      types: type,
      paymentMethod,
    }));
  }

  public deleteBankAccount(bank: string): void {
    if (confirm('Do you want to delete this account')) {
      this.store$.dispatch(fromStore.actionCurrentUserDeleteBank({
        bank,
      }));
    }
  }

  public deletePaypalAccount(paypal: string): void {
    if (confirm('Do you want to delete this account')) {
      this.store$.dispatch(fromStore.actionCurrentUserDeletePaypal({
        paypal,
      }));
    }
  }
}
