import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure:false
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res=[];
    for(let mascota of value){
      if(mascota.match('^.*'+args+'.*$')){
        res.push(mascota);
      }
    }
    return res;
  }

}
