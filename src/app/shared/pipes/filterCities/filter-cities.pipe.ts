import { Pipe, PipeTransform } from '@angular/core';
import { City, CityObject } from '../../enums/city';

@Pipe({
  name: 'filterCities'
})
export class FilterCitiesPipe implements PipeTransform {
  transform(value: CityObject[], filterText: string): CityObject[] {
    return value.filter((cityObject: CityObject) =>
      City[cityObject.value].toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
