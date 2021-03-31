import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromStore from '@arenaops/arena.ux/store';

@Component({
  selector: 'aux-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public showPassword = false;
  public showConfirmPassword = false;
  public signupSubmitted = false;

  public signupForm: FormGroup;
  public signupError = '';

  constructor(private store$: Store<fromStore.State>,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      email: this.fb.control('',
        [Validators.required, Validators.email]),
      nameFirst: this.fb.control('',
        [Validators.required, Validators.maxLength(128)]),
      userPassword: this.fb.control('',
        [Validators.required, Validators.maxLength(128)]),
      userPasswordConfirmation: this.fb.control('',
        [Validators.required, Validators.maxLength(128)]),
    });
  }

  public signup(credentials: any, isValid: boolean): void {
    this.signupSubmitted = true;
    if (isValid) {
      this.store$.dispatch(fromStore.actionSignUp({
        credentials
      }));
    }

  }

}
