import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  numero:number;
  cadena:string;
  array:Array<string>;
  fecha:Date;
  cadena2:string;
  mascotas:Array<string>;
  mensaje;
  constructor() { 
    this.numero=3;
    this.cadena="cadena1";
    this.array=["pos1","pos2","pos3"];
    this.fecha=new Date();
    this.cadena2="Escuchad mis palabras, sed testigos de mi juramento ... La noche se avecina, ahora empieza mi guardia. No terminará hasta el día de mi muerte. No tomaré esposa, no poseeré tierras, no engendraré hijos.No llevaré corona, no alcanzaré la gloria. Viviré y moriré en mi puesto.Soy la espada en la oscuridad. Soy el vigilante del Muro.Soy el fuego que arde contra" ;
    this.mascotas=["gato","perro","lagarto"];
    this.mensaje= new Promise<string>((resolve)=>{
      setTimeout(()=>{
        resolve("un mensaje muy importante...");
      },2000);
      
    });
  }

  ngOnInit() {
  }

  addMascota(nuevaMascota){
    this.mascotas.push(nuevaMascota);
  }
}
