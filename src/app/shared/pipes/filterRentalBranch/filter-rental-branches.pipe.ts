import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../../enums/city';
import { RentalBranch } from '../../models/rentalBranch';

@Pipe({
  name: 'filterRentalBranches'
})
export class FilterRentalBranchesPipe implements PipeTransform {
  transform(value: RentalBranch[], filterText: string): RentalBranch[] {
    return value.filter((rentalBranch: RentalBranch) =>
      City[rentalBranch.city].toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
