import { Component } from '@angular/core';
import { Configuration } from "./models/configuration";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiendo angular';
  public descripcion:string = '';
  public mostrarVideojuegos:boolean=true;
  public config:any;

  constructor() {
    this.title = Configuration.titulo;
    this.descripcion=Configuration.descripcion;
    this.config=Configuration;
  }

  ocultarVideojuegos(value: boolean){
    this.mostrarVideojuegos=value;
  }

}
