import { Pipe, PipeTransform } from '@angular/core';
import { User } from './table.service';

@Pipe({ name: 'orderBy' })
export class PipeFill implements PipeTransform {
  transform(array: User[], value: string): User[] {
    if (value === '-1') {
      return array;
    }

    array.sort(function(a, b) {
      if (typeof a[value] === 'number') {
        return a[value] - b[value];
      }

      return (<string>a[value]).localeCompare(<string>b[value]);
    });

    return array;
  }
}
