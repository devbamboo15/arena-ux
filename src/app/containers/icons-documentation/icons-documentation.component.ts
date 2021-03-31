import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-icons-documentation',
  templateUrl: './icons-documentation.component.html',
  styleUrls: ['./icons-documentation.component.scss']
})
export class IconsDocumentationComponent implements OnInit {

  code1 = `
  <i class="fas fa-cookie-bite"></i>
  <i class="fas fa-cookie"></i>
  ...
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
