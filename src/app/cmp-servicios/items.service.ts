import {LogService} from './log.service';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class ItemsService {
items:Array<string>;
emitirEvento;
  constructor(private logService:LogService) { 
    this.items=["items1","items2","items3"];
    this.emitirEvento= new EventEmitter<string>();
  }
  getItems(){
    return this.items;
  }
  emitirMensaje(mensaje){
    this.emitirEvento.emit(mensaje);
  }
  guardar(item){
    this.items.push(item);
    this.logService.mostrarEnConsola('se ha guardado el item: '+item);
    
  }

}

