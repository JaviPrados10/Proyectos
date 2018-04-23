import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let array=  value.split("");
    array = array.reverse();
    array= array.join("");
    return array;
  }

}
