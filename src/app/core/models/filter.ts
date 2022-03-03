export enum FilterOperator {
  Equal = 'eq',
  NotEqual = 'neq',
  LessThan = 'lt',
  LessThanOrEqual = 'lte',
  GreaterThan = 'gt',
  GreaterThanOrEqual = 'gte',
  IsNull = 'isnull',
  IsNotNull = 'isnotnull',
  StartsWith = 'startswith',
  EndsWith = 'endswith',
  Contains = 'contains',
  DoesNotContain = 'doesnotcontain'
}

export enum FilterLogic {
  And = 'and',
  Or = 'or'
}

export interface Filter {
  field: string;
  operator: FilterOperator;
  value?: string;
  logic?: FilterLogic;
  filters?: Filter[];
}
