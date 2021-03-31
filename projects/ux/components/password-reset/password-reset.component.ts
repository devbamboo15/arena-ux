import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PasswordResetCredential } from '@arenaops/arena.ux/store';


@Component({
  selector: 'aux-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  @Output() submittedEvent = new EventEmitter<PasswordResetCredential>();
  public form: FormGroup;
  public isError = false;
  public submitted = false;
  public icon = 'fal fa-eye-slash';
  public isPassword = true;
  public icon2 = 'fal fa-eye-slash';
  public isConfirmPassword = true;
  private credential: PasswordResetCredential = {
    password: '',
    resetId: ''
  };

  private subscription$: Subscription;
  private resetId: string;

  constructor(private activeRoute: ActivatedRoute) {
    this.subscription$ = this.activeRoute.paramMap
      .subscribe(params => {
        if (params.get('reset-id')) {
          this.resetId = params.get('reset-id');
        }
      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
    console.log(this.resetId);
  }

  public onSubmit(): void {
    this.submitted = true;
    this.icon2 = '';
    this.icon = '';
    if (this.form.get('password').value === this.form.get('confirmPassword').value) {
      this.credential.password = this.form.get('password').value;
      this.credential.resetId = this.resetId;
      this.submittedEvent.emit(this.credential);
      this.form.reset();
    }
    else {
      this.isError = true;
    }
  }

  public onIconClick(): void {
    if (this.isPassword) {
      this.icon = 'fal fa-eye';
      this.isPassword = false;
      return;
    }
    this.icon = 'fal fa-eye-slash';
    this.isPassword = true;
  }

  public onIconTwoClick(): void {
    if (this.isConfirmPassword) {
      this.icon2 = 'fal fa-eye';
      this.isConfirmPassword = false;
      return;
    }
    this.icon2 = 'fal fa-eye-slash';
    this.isConfirmPassword = true;
  }


  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
