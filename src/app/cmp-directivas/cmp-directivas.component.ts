import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  colorLetra:string;
  centrado:boolean;
  mostrar:boolean;
  items:Array<string>
  animal:string;

    constructor() { 
    this.colorLetra="blue";
    this.centrado=true;
    this.mostrar=true;
    this.items=["item1","item2","item3"];
    this.animal="perro";
  }

  ngOnInit() {
  }

  getStyles(){
    return{
      color:'red',
      backgroundColor:'yellow'
    };
  }
  centrame(){
    this.centrado= !this.centrado;
  }
  cambiarMostrar(){
    this.mostrar=!this.mostrar;
  }
}
