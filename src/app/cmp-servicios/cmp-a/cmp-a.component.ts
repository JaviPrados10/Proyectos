import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  
})
export class CmpAComponent implements OnInit {
  items:Array<string>

  
  constructor(private itemService: ItemsService) { 
    
  }

  ngOnInit() {
    this.items=this.itemService.getItems();
  }

  guardar(item){
  this.itemService.guardar(item);
  }
  enviar(item){
    this.itemService.emitirMensaje(item);
    }
}
