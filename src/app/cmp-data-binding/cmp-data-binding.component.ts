import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

 @Input() 
  nombre:string;
  dis:boolean;
  apellido:string;

  @Output()
  miEvento;
  mensaje;

  constructor() {
    this.nombre="Javi";
    this.dis=false;
    this.miEvento= new EventEmitter<string>();
    this.apellido="";
   }
  
  ngOnInit() {
  }
  habilitarEdicion(){
    this.dis= !this.dis;
    this.miEvento.emit(`Se ha ${this.dis? 'deshabilitado' : 'habilitado'}`);
    }
  
  cambiarNombreCompleto(nombreCompleto){
    let nombreYapellido = nombreCompleto.split(" ");
    this.nombre= nombreYapellido.shift();
    this.apellido = nombreYapellido.join("");
  }
}
