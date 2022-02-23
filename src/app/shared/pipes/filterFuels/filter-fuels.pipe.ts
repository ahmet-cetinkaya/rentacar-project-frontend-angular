import { Pipe, PipeTransform } from '@angular/core';
import { Fuel } from '../../models/fuel';

@Pipe({
  name: 'filterFuels'
})
export class FilterFuelsPipe implements PipeTransform {
  transform(value: Fuel[], filterText: string): Fuel[] {
    return value.filter((f: Fuel) =>
      f.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
