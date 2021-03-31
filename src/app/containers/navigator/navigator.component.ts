import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from '@arenaops/arena.ux/components/breadcrumbs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {

  code11 = `
  <aux-navigation-panel [items]="items">
    <ng-container start>
      <aux-brand project="ux"></aux-brand>
    </ng-container>
    <ng-container end>
      <aux-user></aux-user>
    </ng-container>
  </aux-navigation-panel>
  `;

  code12 = `
  items = [
      {
        label: 'Apparel',
        path: '/apparel',
        iconCss: 'fad fa-save'
      },
      {
        label: 'Dropdown Nav',
        path: '/home',
        children: [
          {
            label: 'And Another One',
            path: '/home'
          },
          {
            label: 'Link with target',
            path: 'https://www.google.com/',
            target: '_blank',
          },
        ],
      },
  ];
  `;


  items = [
    {
      label: 'Apparel',
      path: '/apparel'
    },
    {
      label: 'Active Link',
      path: '/navigator'
    },
    {
      label: 'Estimate',
      path: '/estimate'
    },
    {
      label: 'Dropdown Nav',
      path: '/home',
      children: [
        {
          label: 'External and long link',
          path: 'https://www.google.com/',
          external: true
        },
        {
          label: 'Another One',
          path: '/home'
        },
        {
          label: 'And Another One',
          path: '/home'
        },
      ],
    },
  ];

  externalItems = [
    {
      label: 'External1',
      path: '/home',
      children: [
        {
          label: 'Google',
          path: 'https://www.google.com/',
          external: true
        },
      ],
    },
    {
      label: 'External2',
      path: '/home',
      children: [
        {
          label: 'Google',
          path: 'https://www.google.com/',
          external: true
        },
      ],
    },
  ];

  constructor(private router: Router, private breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit() {
    this.breadcrumbsService.set(this.router.url, [
      {label: 'UX', url: '/'},
      {label: 'Navigation Panel', url: '/navigator'},
    ]);
  }

}
