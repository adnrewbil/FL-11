import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../models/News';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: News[], filterValue: string): any {
    return value.filter(v => v.title.includes(filterValue));
  }

}
