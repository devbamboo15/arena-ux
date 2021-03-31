import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, actionPasswordReset, PasswordResetCredential } from '@arenaops/arena.ux/store';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
  }

  public onSubmit(credential: PasswordResetCredential) {
    this.store$.dispatch(actionPasswordReset({
      credentials: credential
    }));
  }

}
