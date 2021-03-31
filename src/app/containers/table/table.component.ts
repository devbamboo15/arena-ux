import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableMeta, TableRequest} from '@arenaops/arena.ux/components/table';
import {TableColumn} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  code0 = `
import { TableModule } from '@arenaops/arena.ux/components/table';

@NgModule({
  imports: [TableModule,...]
})
export class AppModule(){}
  `;

  code11 = `
  <aux-table
    class="table-hover table-sm"
    [rows]="rows"
    [meta]="meta"
    [columns]="columns"
    [isLoading]="isLoading"
    [request]="request"
    (requested)="getUsers($event)">
  </aux-table>

  <ng-template
    let-value="value"
    #createdAtTpl>
    {{ value * 1000 | date: "mediumDate" }}
  </ng-template>
  `;

  code12 = `
export class TableComponent {

  @ViewChild('createdAtTpl', {static: true}) createdAtTpl: TemplateRef<any>;

  public request: TableRequest = {
    pagination: {page: 1, pageSize: 5},
    filter: {},
    searchText: '',
    sort: ''
  };

  public rows: any[] = [];
  public meta: TableMeta;
  public columns: TableColumn[] = [];
  public isLoading: boolean;

  ngOnInit() {
    this.columns = [
      {name: 'Name', prop: 'name', sortable: true},
      {name: 'Email', prop: 'primary_email.user_auth_email', sortable: false},
      {name: 'Created At', prop: 'stamp_created', cellTemplate: this.createdAtTpl, sortable: false},
    ];
  }
}
  `;

  @ViewChild('createdAtTpl', {static: true}) createdAtTpl: TemplateRef<any>;

  public request: TableRequest = {
    pagination: {page: 1, pageSize: 5},
    filter: {},
    searchText: '',
    sort: '',
  };
  public rows: any[] = [];
  public meta: TableMeta;
  public columns: TableColumn[] = [];
  public isLoading: boolean;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.columns = [
      {name: 'Name', prop: 'name', sortable: true},
      {name: 'Email', prop: 'primary_email.user_auth_email', sortable: false},
      {name: 'Created At', prop: 'stamp_created', cellTemplate: this.createdAtTpl, sortable: false},
    ];

    this.getUsers(this.request);
  }

  public getUsers(request: TableRequest) {

    this.request = request;

    this.isLoading = true;
    const params = {
      per_page: `${request.pagination.pageSize}`,
      page: `${request.pagination.page}`,
    };

    this.http.get('users', {params}).subscribe((response: any) => {
      this.rows = response.data;
      this.meta = {
        currentPage: response.meta.current_page,
        perPage: response.meta.per_page,
        total: response.meta.total,
        count: response.meta.total,
        from: response.meta.from,
        links: response.meta.links,
        totalPages: 0,
      };
      this.isLoading = false;
    });
  }

}
