import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strikeThrough'
})
export class StrikeThroughPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
