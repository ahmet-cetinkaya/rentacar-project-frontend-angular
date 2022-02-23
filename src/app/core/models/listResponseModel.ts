export interface ListResponseModel<T> {
  from?: number;
  index?: number;
  size?: number;
  count?: number;
  pages?: number;
  items: T[];
  hasPrevious?: boolean;
  hasNext?: boolean;
}
