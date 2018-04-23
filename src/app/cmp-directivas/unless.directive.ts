import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private tempRef:TemplateRef<any>,private VcRef:ViewContainerRef) {}
    
  @Input()set appUnless(condicion:boolean){
      if(!condicion){
        this.VcRef.createEmbeddedView(this.tempRef);
      }else{
        this.VcRef.clear();
      }
    }
   

}
