import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../../models/color';

@Pipe({
  name: 'filterColors'
})
export class FilterColorsPipe implements PipeTransform {
  transform(value: Color[], filterText: string): Color[] {
    return value.filter((color: Color) =>
      color.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
