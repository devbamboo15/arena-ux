import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from '@arenaops/arena.ux/components/breadcrumbs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
  }

  ngOnInit(): void {
    this.breadcrumbsService.set(this.router.url, [
      {label: 'UX', url: '/'},
      {label: 'Breadcrumbs', url: '/breadcrumbs'},
      {label: 'List', url: '/breadcrumbs/list'},
      {label: 'Custom Detail', url: '/breadcrumbs/list/detail'},
    ]);
  }

}
