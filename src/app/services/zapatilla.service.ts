import { Injectable } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";

@Injectable() //Inyectar la dependencia, para no estar haciendo a cada rato un new
export class ZapatillaService {
  public zapatillas:Array<Zapatilla>;
  constructor() {
    this.zapatillas=[
      new Zapatilla("Deportivas", "Rebook", "Azul", 90, false),
      new Zapatilla("Casuales", "Nike", "Negro", 100, true),
      new Zapatilla("Diarias", "Puma", "Rojo", 50, true),
      new Zapatilla("Formales", "Fila", "Cafe", 150, true),
      new Zapatilla("Formales", "Nike", "Verde", 120, false)
    ];
  }

  getZapatillas():Array<Zapatilla>{
    return this.zapatillas;
  }
}
