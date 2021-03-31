import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SelectionType, TableColumn} from '@swimlane/ngx-datatable';
import {TableMeta, TableRequest} from './table.interface';

@Component({
  selector: 'aux-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() public rows: any[] = [];
  @Input() public columns: TableColumn[] = [];
  @Input() public meta: TableMeta;
  @Input() public request: TableRequest;
  @Input() public isLoading = false;

  @Input() public class = '';

  @Input() public showSearchToolbar = true;
  @Input() public rowsCountOptions = [5, 10, 15, 20, 50];
  @Input() public selectionType: SelectionType = null;
  @Input() public selectedRows: any[] = [];
  @Input() public isClickableRow = true;
  @Input() public messages;

  @Output() selected = new EventEmitter<any[]>();
  @Output() requested = new EventEmitter<TableRequest>();

  public searchText = '';

  customIcons = {
    sortAscending: 'fas fa-sort-amount-down-alt',
    sortDescending: 'fas fa-sort-amount-up-alt',
    pagerLeftArrow: 'fas fa-chevron-left',
    pagerRightArrow: 'fas fa-chevron-right',
    pagerPrevious: 'fas fa-step-backward',
    pagerNext: 'fas fa-step-forward',
  };

  constructor() {
  }

  public ngOnInit(): void {

  }

  public paginate(event) {
    const request: TableRequest = {
      ...this.request,
      pagination: {...this.request.pagination, pageSize: event.pageSize, page: event.offset + 1}
    };
    this.requested.emit(request);
  }

  public sort(event) {
    if (event.sorts.length === 0) {
      return;
    }

    const sort = event.sorts[0];
    let direction = '+';
    if (sort.dir === 'desc') {
      direction = '-';
    }

    const request: TableRequest = {...this.request, sort: `${direction}${sort.prop}`};
    this.requested.emit(request);
  }

  public click(event) {
    // console.log(event);
  }

  public search(event) {
    const request: TableRequest = {...this.request, searchText: this.searchText};
    this.requested.emit(request);
  }
}
