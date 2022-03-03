import { Filter } from './filter';
import { Sort } from './sort';

export interface DynamicDto {
  filter?: Filter;
  sort?: Sort[];
}
