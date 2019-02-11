import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', loadChildren: './alumnos/alumnos.module#AlumnosPageModule' },
  { path: 'resultados/:lexium_id', loadChildren: './resultados/resultados.module#ResultadosPageModule' },
  { path: 'resultado/:lexium_id/:eval_id', loadChildren: './resultado/resultado.module#ResultadoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
