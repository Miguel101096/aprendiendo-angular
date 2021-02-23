import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ContactoComponent } from './contacto/contacto.component';
import { ExternoComponent } from './externo/externo.component';
import {CalculadoraPipe} from "./pipes/calculadora.pipe";

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    ZapatillasComponent,
    ContactoComponent,
    ExternoComponent,
    CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
