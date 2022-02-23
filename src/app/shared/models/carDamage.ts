import { Entity } from '../../core/models/entity';

export interface CarDamage extends Entity {
  carId: number;
  damageDescription: string;
  isFixed: boolean;
}

export interface CarDamageListModel {
  id: number;
  carModelBrandName: string;
  carModelName: string;
  carModelYear: number;
  carPlate: string;
  damageDescription: string;
  isFixed: boolean;
}
