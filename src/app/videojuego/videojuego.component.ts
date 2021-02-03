import { Component } from '@angular/core';

@Component (
    {
        selector: 'videojuego',
        templateUrl: './videojuego.component.html'
    }
)
export class VideojuegoComponent {
    
    public titulo:string;
    public listado:string;

    constructor () {
        this.titulo="Componente de video juegos";
        this.listado="Listado de juegos";
        console.log("Componente cargado");
    };
    ngOnInit():void {
        console.log("Soy un OnInit");
    };
    ngDoCheck():void {
        console.log("Soy un DoCheck");
    };
    ngOnDestroy():void {
        console.log("Soy un OnDestroy");
    };
    cambiarTitulo() {
        this.titulo = "Nuevo Titulo";
    }
}