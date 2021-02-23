import { Component } from '@angular/core';

@Component({
  selector: 'videojuego', //Etiqueta del componente
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent {
  public titulo:string='';
  public listado:string='';

  constructor() {
    this.titulo="Componente de videojuegos";
    this.listado="Listado de juegos";
    console.log("Componente videojuegos cargado");
  }

  //Se usa al inicio
  ngOnInit():void{
    console.log("Soy el OnInit");
  }

  //Se usa con cada cambio
  ngDoCheck():void{
    console.log("Soy el DoCheck");
  }

  //Se usa cuando finaliza
  ngOnDestroy():void{
    console.log("Soy el OnDestroy");
  }

  cambiarTitulo(){
    this.titulo="Nuevo titulo";
  }
}
