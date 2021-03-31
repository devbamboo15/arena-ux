import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '@arenaops/arena.ux/store';
import {FormGroup, FormControl} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'aux-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public profile$ = this.store$.select(fromStore.selectProfile);

  public editNameModalShow = false;
  public editNameForm: FormGroup;
  public avatarPath: File;

  constructor(private store$: Store<fromStore.State>,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();

    this.editNameForm = new FormGroup({
      name: new FormControl('')
    });
  }

  public editName(): void {
    const profile = new fromStore.Profile();
    profile.name = this.editNameForm.get('name').value;
    // profile.userUuid = this.uuid;
    this.store$.dispatch(fromStore.actionCurrentUserEditName({
      profile
    }));
  }

  public editNameShow(): void {
    // this.editNameForm.setValue({name: this.name$});
    this.editNameModalShow = true;
  }

  public handleUploadImage(event): void {
    this.avatarPath = event[0];
    this.store$.dispatch(fromStore.actionCurrentUserUploadAvatar({
      avatar: this.avatarPath
    }));
  }

}
