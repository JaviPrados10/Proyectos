import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPowermode]'
})
export class PowermodeDirective {
  colores:Array<string>;
 @HostBinding("style.color") colorLetra:string;
 @HostBinding("style.marginTop") marginTop:string;
 @HostBinding("style.marginLeft") marginLeft:string;
  constructor() { 
    this.colores=["red","blue","green","orange","yellow","black","white","pink","gray","purple","aqua"];
    this.colorLetra="white";
    this.marginTop="0px";
    this.marginLeft="0px";
  }
@HostListener("input")onkeypress(){
  this.colorLetra=this.colores[Math.floor(Math.random() * this.colores.length)];
  this.marginTop="5px";
  this.marginLeft="10px";
  setTimeout(()=>{
    this.marginTop="0px";
    this.marginLeft="0px";
  }, 300);
   }

}
