import { Pipe, PipeTransform } from '@angular/core';
import { AdditionalService } from '../../models/additionalService';

@Pipe({
  name: 'filterAdditionalServices'
})
export class FilterAdditionalServicesPipe implements PipeTransform {
  transform(value: AdditionalService[], filterText: string): AdditionalService[] {
    return value.filter((a: AdditionalService) =>
      a.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
