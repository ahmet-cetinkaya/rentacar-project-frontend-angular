export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc'
}

export interface Sort {
  field: string;
  dir: SortDirection;
}
