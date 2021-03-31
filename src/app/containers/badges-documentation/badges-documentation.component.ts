import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-badges-documentation',
  templateUrl: './badges-documentation.component.html',
  styleUrls: ['./badges-documentation.component.scss']
})
export class BadgesDocumentationComponent implements OnInit {

  code1 = `
  <span class="badge badge-soft-primary">Primary</span>
  <span class="badge badge-soft-secondary">Secondary</span>
  <span class="badge badge-soft-success">Success</span>
  <span class="badge badge-soft-info">Info</span>
  <span class="badge badge-soft-warning">Warning</span>
  <span class="badge badge-soft-danger">Danger</span>
  <span class="badge badge-soft-light">Light</span>
  <span class="badge badge-soft-dark">Dark</span>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
