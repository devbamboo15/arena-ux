import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-support-desk',
  templateUrl: './support-desk.component.html',
  styleUrls: ['./support-desk.component.scss']
})
export class SupportDeskComponent implements OnInit {

  code1 = `
  import {SupportDeskModule} from '@arenaops/arena.ux/features/support';

  @NgModule({
    imports: [
      SupportDeskModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code2 = `
  <aux-support></aux-support>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
