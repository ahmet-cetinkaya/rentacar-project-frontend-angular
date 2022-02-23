export enum CarState {
  Available = 1,
  Rented = 2,
  Maintenance = 3
}

export interface CarStateObject {
  value: number;
  name: string;
}
