//Importar modulos de router de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideojuegoComponent} from "./videojuego/videojuego.component";
import {CursosComponent} from "./cursos/cursos.component";
import {ZapatillasComponent} from "./zapatillas/zapatillas.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {ExternoComponent} from "./externo/externo.component";

//Importar los componentes

//Arreglo de rutas
const routes: Routes = [
  {path:'videojuegos', component: VideojuegoComponent},
  {path:'cursos', component: CursosComponent},
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'externo', component: ExternoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
