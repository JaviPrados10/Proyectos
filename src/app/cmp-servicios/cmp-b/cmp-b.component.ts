import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
 
})
export class CmpBComponent implements OnInit {
  items:Array<string>;
  mensaje:string;
  constructor(private itemService: ItemsService) { 
   
  }

  ngOnInit() {
    this.items=this.itemService.getItems();
    this.itemService.emitirEvento.subscribe(
      (msg)=>{
        this.mensaje=msg;
      }
    );
  }
  guardar(item){
    this.itemService.guardar(item);
    }
}
