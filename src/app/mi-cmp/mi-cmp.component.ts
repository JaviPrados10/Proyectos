import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mi-cmp',
  templateUrl: './mi-cmp.component.html',
  styleUrls: ['./mi-cmp.component.css']
})
export class MiCmpComponent implements OnInit {

 @Input() mensaje:string;
  constructor() {  
    this.mensaje="";

}

  ngOnInit() {
  }

}
