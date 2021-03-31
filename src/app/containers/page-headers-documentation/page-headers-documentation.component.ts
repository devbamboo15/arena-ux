import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-headers-documentation',
  templateUrl: './page-headers-documentation.component.html',
  styleUrls: ['./page-headers-documentation.component.scss']
})
export class PageHeadersDocumentationComponent implements OnInit {

  code1 = `
  <div class="header">
    <div class="header-body">
      <h6 class="header-pretitle">
        Members
      </h6>
      <h1 class="header-title">
        Samuel White
      </h1>
    </div>
  </div>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
