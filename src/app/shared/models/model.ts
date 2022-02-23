import { Entity } from 'app/core/models/entity';

export interface Model extends Entity {
  brandId: number;
  fuelId: number;
  transmissionId: number;
  name: string;
  dailyPrice: number;
  imageUrl: string;
}

export interface ModelList {
  id: number;
  brandName: string;
  fuelName: string;
  transmissionName: string;
  name: string;
  dailyPrice: number;
  imageUrl: string;
}
