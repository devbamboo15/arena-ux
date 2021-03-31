import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {

  code11 = `
  <aux-sidebar context="left">
    <h6>Setup</h6>
    <aux-nav [items]="setupMenuItems"></aux-nav>
    <h6>Layout</h6>
    <aux-nav [items]="layoutMenuItems"></aux-nav>
  </aux-sidebar>
  `;

  code12 = `
  @Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
  })
  export class IndexComponent implements OnInit {
  ...
    setupMenuItems: NavMenuItem[] = [
        {
          label: 'Getting Started',
          path: '/',
          iconClass: 'fas fa-circle',
        }
      ];

      layoutMenuItems: NavMenuItem[] = [
        {
          label: 'Layout',
          path: '/layout',
          iconClass: 'fas fa-circle',
        },
        {
          label: 'Menu Panel',
          path: '/menu-panel',
          iconClass: 'fas fa-circle',
        },
        {
          label: 'Navigator panel',
          path: '/navigator',
          iconClass: 'fas fa-circle',
        },
      ];
  ...
  }
  `;

  constructor() {
  }

  ngOnInit() {
  }

}
