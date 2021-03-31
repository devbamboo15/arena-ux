import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  code1 = `
  import {AutoCompleteModule} from '@arenaops/arena.ux/components/auto-complete';

  @NgModule({
    imports: [
      AutoCompleteModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code2 = `
  <div class="form-group">
    <ng-select class="form-control">
    </ng-select>
  </div>
  `;

  code3 = `
  <aux-autocomplete [apiUrl]="apiURl" [bindLabel]="'name'" [placeHolder]="'Enter Something'"
                    [queryParam]="queryParams" (valueSelected)="valueSelected($event)">
  </aux-autocomplete>
  `;

  code4 = `
  <aux-autocomplete [apiUrl]="apiURl" [placeHolder]="'Enter Something'" [queryParam]="queryParams"
                    (valueSelected)="singleValueSelected($event)" [isMultiSelect]="false">
  </aux-autocomplete>
  `;

  public apiURl = 'office/soundblock/autocomplete/services';
  public queryParams = 'name';
  public singleUser = [];
  users = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public singleValueSelected($event): void {
    this.singleUser = $event;
  }

  valueSelected($event) {
    this.users = $event;
  }

}
