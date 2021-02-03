import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillasService } from '../services/zapatilla.service'

@Component (
    {
        selector: 'zapatillas',
        //template: `
        //<h2>Componente zapatillas</h2>
        //<p>Este componenete muestra zapatillas</p>
        //`
        templateUrl: './zapatillas.component.html',
        providers: [
            ZapatillasService
        ]
    }
)
export class ZapatillasComponent implements OnInit{
    
    public titulo:string;
    public zapatillas:Array<Zapatilla>;
    public marcas:String[];
    public color:string;
    public miMarca:string;

    constructor (
        private _zapatillasService: ZapatillasService
    ) {
        this.titulo="Componente de Zapatillas....";
        this.miMarca="Nike";
        this.color='orange';
        this.marcas=new Array();
        this.zapatillas=[];
    };
    ngOnInit(){
        this.zapatillas = this._zapatillasService.getZapatillas();
        console.log(this.zapatillas);
        //this.getMarca();
    }
    getMarcas(){
        this.zapatillas.forEach(
            (zapatilla,index)=>{
                if(this.marcas.indexOf(zapatilla.marca)<0) {
                    this.marcas.push(zapatilla.marca);
                };
                console.log(index);
            }
        );
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
    borrarMarca(index:any){
        //delete this.marcas[index];
        this.marcas.splice(index,1);
    }
}