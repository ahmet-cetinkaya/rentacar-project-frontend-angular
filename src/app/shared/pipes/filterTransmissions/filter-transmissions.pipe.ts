import { Pipe, PipeTransform } from '@angular/core';
import { Transmission } from '../../models/transmission';

@Pipe({
  name: 'filterTransmissions'
})
export class FilterTransmissionsPipe implements PipeTransform {
  transform(value: Transmission[], filterText: string): Transmission[] {
    return value.filter((t: Transmission) =>
      t.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
