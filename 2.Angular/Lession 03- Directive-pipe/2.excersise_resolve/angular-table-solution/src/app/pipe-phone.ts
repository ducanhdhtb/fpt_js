import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PipePhone implements PipeTransform {
  transform(value: string): string {
    return `(+84) ${value.replace(/-/g, '')}`;
  }
}
