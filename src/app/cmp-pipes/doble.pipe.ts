import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: any, args:number,arg2:number=0, any): any {
    return value*args+arg2;
  }

}
