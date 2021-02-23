import {Component, OnInit} from '@angular/core';
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService} from "../services/zapatilla.service";

@Component({
  selector: 'zapatillas', //Etiqueta del componente
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
  public titulo:string='Componente Zapatillas';
  public zapatillas: Array<Zapatilla> = [];
  public marcas:String[];
  public color:string;
  public miMarca:string;
  public precio:number;

  constructor(
    private _zapatillasService: ZapatillaService
  ) {
    this.miMarca="Nike";
    this.color='orange';
    this.marcas=new Array();
    this.precio = 0;
  }

  ngOnInit(){
    this.zapatillas=this._zapatillasService.getZapatillas();
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index)=>{
      //Eliminar duplicados
      if(this.marcas.indexOf(zapatilla.marca)<0){
        this.marcas.push(zapatilla.marca);
      }
      console.log(index);
    });
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.miMarca);
  }

  addMarca(){
    this.marcas.push(this.miMarca);
  }

  onBlur(){
    console.log("Has salido del input");
  }

  borrarMarca(index: number){
    //delete this.marcas[index]; //Borrar pero convertir en undefinded
    this.marcas.splice(index,1); //Le paso el indice a borrar y a partir de eso, este borra el elemento
  }
}
