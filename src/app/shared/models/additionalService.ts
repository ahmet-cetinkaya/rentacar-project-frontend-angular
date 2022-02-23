import { Entity } from 'app/core/models/entity';

export interface AdditionalService extends Entity {
  name: string;
  dailyPrice: number;
}
