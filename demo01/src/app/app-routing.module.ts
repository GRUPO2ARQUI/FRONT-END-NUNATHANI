import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadComponent } from './component/especialidad/especialidad.component';
import { EspecialidadInsertarComponent } from './component/especialidad/especialidad-insertar/especialidad-insertar.component'; 

import { DisponibilidadInsertarComponent } from './component/disponibilidad/disponibilidad-insertar/disponibilidad-insertar.component';
import { DisponibilidadComponent } from './component/disponibilidad/disponibilidad.component';

import { Rutinas_recreativasInsertarComponent } from './component/rutinas_recreativas/rutinas_recreativas-insertar/rutinas_recreativas-insertar.component';
import { Rutinas_recreativasComponent } from './component/rutinas_recreativas/rutinas_recreativas.component';


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
  
  {
    path: 'rutinas_recreativas',
    component: Rutinas_recreativasComponent
    ,
    children: [
      {path: 'rutinas_recreativasinsertar', component: Rutinas_recreativasInsertarComponent},
      {path: 'edicion/:id', component: Rutinas_recreativasInsertarComponent},
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
