import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  code1 = `
  import {UserModule} from '@arenaops/arena.ux/features/user';

  @NgModule({
    imports: [
      UserModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code21 = `
  <aux-user [items]="userItems"></aux-user>
  `;

  code22 = `
  userItems = [
    {
      label: 'Profile',
      link: '/profile',
      iconCss: 'fad fa-user-crown',
    },
    {
      label: 'Notifications',
      onClick: () => {
        this.notificationSettingsService.show();
      },
      iconCss: 'fad fa-bells',
    },
  ];
  `;

  code3 = `
  {
    path: 'profile',
      loadChildren: () => import('@arenaops/arena.ux/features/user').then(m => m.UserModule),
      canActivate: [AuthGuard]
  },
  `;

  code4 = `
  <aux-sign-in></aux-sign-in>
  `;
  
  code5 = `
  <aux-sign-up></aux-sign-up>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
