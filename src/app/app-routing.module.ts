import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component'

const routes: Routes = [
  {
    path: 'videojuego',
    component: VideojuegoComponent
  },
  {
    path: 'cursos',
    component : CursosComponent
  },
  {
    path: 'zapatillas',
    component: ZapatillasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
