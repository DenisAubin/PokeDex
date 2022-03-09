import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typesToArray'
})
export class TypesToArrayPipe implements PipeTransform {
  transform(data: Object) {
    return Object.keys(data);
  }
}
