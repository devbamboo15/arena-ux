import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-documentation',
  templateUrl: './progress-documentation.component.html',
  styleUrls: ['./progress-documentation.component.scss']
})
export class ProgressDocumentationComponent implements OnInit {

  code1 = `
  <div class="progress progress-sm">
    <div class="progress-bar" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0"
         aria-valuemax="100"></div>
  </div>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
