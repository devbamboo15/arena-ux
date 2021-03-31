import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromStore from '@arenaops/arena.ux/store';
import {Store} from '@ngrx/store';

import {SignInUserModel} from './sign-in-user.model';

@Component({
  selector: 'aux-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  @Output() submittedEvent = new EventEmitter<SignInUserModel>();
  @Output() forgetPasswordEvent = new EventEmitter<SignInUserModel>();

  public submitted = false;
  public form: FormGroup;
  public forgetPasswordForm: FormGroup;
  public isForgetPassword: boolean;

  public isAuthorizing$ = this.store$.select(fromStore.selectIsAuthorizing);
  public authorizationError$ = this.store$.select(fromStore.selectAuthorizationError);

  constructor(private store$: Store<fromStore.State>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.forgetPasswordForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }

  async submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.store$.dispatch(fromStore.actionLogin({
        credentials: this.form.value
      }));
      this.submittedEvent.emit(this.form.value);
    }
  }

  public isForgetPasswordToggle(): void {
    this.isForgetPassword = !this.isForgetPassword;
    this.forgetPasswordForm.reset();
    this.form.reset();
  }

  public forgetPassword(): void {
    this.submitted = true;
    if (this.forgetPasswordForm.valid) {
      this.forgetPasswordEvent.emit(this.forgetPasswordForm.value);
    }
  }

}
