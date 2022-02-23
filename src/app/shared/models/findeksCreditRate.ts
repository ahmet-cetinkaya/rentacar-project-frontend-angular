import { Entity } from 'app/core/models/entity';

export interface FindeksCreditRate extends Entity {
  customerId: number;
  score: number;
}
