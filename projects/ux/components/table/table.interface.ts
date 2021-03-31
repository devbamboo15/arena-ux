export class TableMeta {
  count: number;
  currentPage: number;
  from: number;
  links: any;
  perPage: number;
  total: number;
  totalPages: number;
}

export class TableRequest {
  searchText: string;
  sort: string;
  filter: {};
  pagination: {
    page: number;
    pageSize: number;
  };
}
