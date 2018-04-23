import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {

  defaulColor:string;
 @HostBinding('style.backgroundColor') colorFondo:string;
 @Input('appMarcar') colorMarcado:string;


  constructor(private elemRef:ElementRef) {
    //elemRef.nativeElement.style.backgroundColor='green';
    this.defaulColor="white";
    this.colorMarcado= "green";
   
   }

   @HostListener("mouseover")onMouseOver(){
     this.colorFondo=this.colorMarcado;
   }
   @HostListener("mouseleave")onMouseLeave(){
     this.colorFondo=this.defaulColor;
   }
   
}
