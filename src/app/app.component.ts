import { Component } from '@angular/core';
import { Configuration } from './models/configuration'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title:string;
  public mostrarVideojuegos:boolean = true;
  public descripcion:string;
  public config;
  constructor () {
    this.title=Configuration.titulo;
    this.descripcion=Configuration.descripcion;
    this.config=Configuration;
  }
  // @ts-ignore
  ocultarVideoJuegos(value) {
    this.mostrarVideojuegos = value;
  };
}
