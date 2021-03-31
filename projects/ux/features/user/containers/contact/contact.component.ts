import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '@arenaops/arena.ux/store';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'aux-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public profile$ = this.store$.select(fromStore.selectProfile);

  public emails$: fromStore.EmailInfo[];
  public phones$: fromStore.PhoneInfo[];
  public phoneForm: FormGroup;
  public emailForm: FormGroup;
  public userId: string;
  public phoneTypes = ['Home', 'Cell', 'Work', 'Other'];

  constructor(private store$: Store<fromStore.State>) {
  }

  ngOnInit(): void {
    this.initForms();
  }

  public initForms(): void {
    this.phoneForm = new FormGroup({
      phoneType: new FormControl(''),
      phoneNumber: new FormControl('')
    });
    this.emailForm = new FormGroup({
      userAuthEmail: new FormControl('')
    });
  }

  public addEmail(): void {
    this.store$.dispatch(fromStore.actionCurrentUserAddEmail({
      email: this.emailForm.value,
    }));
    this.emailForm.reset();
  }

  public addPhone(): void {
    this.store$.dispatch(fromStore.actionCurrentUserAddContact({
      phone: this.phoneForm.value,
    }));
    this.phoneForm.reset();
  }

  public editEmail(email: string): void {
    this.store$.dispatch(fromStore.actionCurrentUserEditEmail({
      oldEmail: email,
      newEmail: email,
    }));
  }

  public verifyEmail(id: string): void {
    this.store$.dispatch(fromStore.actionCurrentUserVerifyEmail());
  }

  public deleteEmail(email: string): void {
    if (confirm('Do you want to remove this email?')) {
      this.store$.dispatch(fromStore.actionCurrentUserDeleteEmail({
        email,
      }));
    }
  }

  public deletePhone(phone: string): void {
    if (confirm('Do You want to delete this Phone number')) {
      this.store$.dispatch(fromStore.actionCurrentUserDeletePhone({
        phone,
      }));
    }
  }
}
