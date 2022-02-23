import { Entity } from 'app/core/models/entity';

export interface IndividualCustomer extends Entity {
  customerId: number;
  firstName: string;
  lastName: string;
  nationalIdentity: string;
}
