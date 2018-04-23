import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mensajePadre;
  
  mostrarMensaje(mensaje){
    console.log(mensaje);
    this.mensajePadre=mensaje;
  }

}

