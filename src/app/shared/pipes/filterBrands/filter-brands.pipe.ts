import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../../models/brand';

@Pipe({
  name: 'filterBrands'
})
export class FilterBrandsPipe implements PipeTransform {
  transform(value: Brand[], filterText: string): Brand[] {
    return value.filter((b: Brand) =>
      b.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }
}
