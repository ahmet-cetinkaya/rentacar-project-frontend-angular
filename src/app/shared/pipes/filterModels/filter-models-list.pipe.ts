import { Pipe, PipeTransform } from '@angular/core';
import { ModelList } from '../../models/model';

@Pipe({
  name: 'filterModelList'
})
export class FilterModelListPipe implements PipeTransform {
  transform(value: ModelList[], filterText: string): ModelList[] {
    return value.filter((m: ModelList) =>
      `${m.brandName} ${m.name} ${m.fuelName} ${m.transmissionName}`
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  }
}
