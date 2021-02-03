import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
@Injectable()
export class ZapatillasService{
    public zapatillas:Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla('Rebook','Azul',70,true),
            new Zapatilla('Nike','Gris',90,true),
            new Zapatilla('Adidas','Blanca',100,true),
            new Zapatilla('DC','Blanca',80,true),
            new Zapatilla('West','Negro',20,true),
            new Zapatilla('Salomon','Blanca',90,true),
            new Zapatilla('Hitec','Naranja',115,true),
            new Zapatilla('Op','Amarillo',120,true),
        ]
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}