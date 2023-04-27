import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioInsertarComponent } from './component/usuario/usuario-insertar/usuario-insertar.component';



const routes: Routes = [
  
  {
    path:'usuario',
    component:UsuarioComponent,
    children: [
      {path: 'usuario-insertar', component: UsuarioInsertarComponent},
      {path: 'edicion/:id', component: UsuarioInsertarComponent},
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
