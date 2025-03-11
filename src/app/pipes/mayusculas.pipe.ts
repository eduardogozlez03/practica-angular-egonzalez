import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
  standalone: false
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}

