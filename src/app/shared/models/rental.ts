export interface Rental {
  id: number;
  carId: number;
  customerId: string;
  rentStartDate: Date;
  rentEndDate: Date;
  returnDate: Date;
}

export interface RentalList {
  id: number;
  carModelBrandName: string;
  carModelName: string;
  carColorName: string;
  carModelYear: number;
  carPlate: string;
  customerFullName: string;
  customerMail: string;
  rentStartDate: Date;
  rentEndDate: Date;
  returnDate: Date;
}
