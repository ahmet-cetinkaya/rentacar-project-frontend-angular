import { Entity } from 'app/core/models/entity';
import { City } from '../enums/city';

export interface RentalBranch extends Entity {
  city: City;
}
