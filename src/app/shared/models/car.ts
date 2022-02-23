import { Entity } from '../../core/models/entity';
import { CarState } from '../enums/carState';

export interface Car extends Entity {
  colorId: number;
  modelId: number;
  rentalBranchId: number;
  carState: CarState;
  kilometer: number;
  modelYear: number;
  plate: string;
  minFindeksCreditRate: number;
}

export interface CarListModel {
  id: number;
  brandName: string;
  modelName: string;
  colorName: string;
  carState: CarState;
  modelYear: number;
  plate: string;
}
