import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadComponent } from './component/especialidad/especialidad.component';
import { EspecialidadInsertarComponent } from './component/especialidad/especialidad-insertar/especialidad-insertar.component'; 

import { DisponibilidadInsertarComponent } from './component/disponibilidad/disponibilidad-insertar/disponibilidad-insertar.component';
import { DisponibilidadComponent } from './component/disponibilidad/disponibilidad.component';

const routes: Routes = [
  {
    path: 'especialidad',
    component: EspecialidadComponent,
    children: [
      {
        path: 'especialidadinsertar',
        component: EspecialidadInsertarComponent,
      },
      {
       path: 'edicion/:id',
       component: EspecialidadInsertarComponent
      },
    ],
  },
  
  {
    path: 'disponibilidad',
    component: DisponibilidadComponent
    ,
    children: [
      {path: 'disponibilidadinsertar',component: DisponibilidadInsertarComponent},
      {path: 'edicion/:id', component: DisponibilidadInsertarComponent},
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
