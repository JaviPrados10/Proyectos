import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: any, args:any): any {
  //  let exp=new RegExp(args,"gi");
  //  let exp1=new RegExp(args2,"gi");
  //  value= value.replace(exp,"*");
  //  value= value.replace(exp1,"z");
   let res= value;
   for(let i of args){
    let exp=new RegExp(i,"gi");
    res=res.replace(exp,'*'.repeat(i.length));
   }
   
    return res;
  }

}
