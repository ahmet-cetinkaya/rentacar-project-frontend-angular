export interface CreateRentalDto {
  modelId: number;
  customerId: number;
  rentStartDate: Date;
  rentEndDate: Date;
  rentStartRentalBranchId: number;
  rentEndRentalBranchId: number;
  additionalServiceIds: number[];
}
