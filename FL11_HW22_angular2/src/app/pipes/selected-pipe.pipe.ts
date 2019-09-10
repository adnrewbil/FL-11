import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../models/News';

@Pipe({
  name: 'selectedPipe'
})
export class SelectedPipePipe implements PipeTransform {

  transform(value: News[], selected: string): any {
    if ( value === undefined) {return value; }
    return value.filter(source => source.sourceId === +selected);
  }

}
