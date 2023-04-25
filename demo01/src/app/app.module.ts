import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadListarComponent } from './component/especialidad/especialidad-listar/especialidad-listar.component';
import { EspecialidadComponent } from './component/especialidad/especialidad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { EspecialidadInsertarComponent } from './component/especialidad/especialidad-insertar/especialidad-insertar.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { DisponibilidadComponent } from './component/disponibilidad/disponibilidad.component';
import { DisponibilidadListarComponent } from './component/disponibilidad/disponibilidad-listar/disponibilidad-listar.component';
import { DisponibilidadInsertarComponent } from './component/disponibilidad/disponibilidad-insertar/disponibilidad-insertar.component';

import { Rutinas_recreativasComponent } from './component/rutinas_recreativas/rutinas_recreativas.component';
import { Rutinas_recreativasListarComponent } from './component/rutinas_recreativas/rutinas_recreativas-listar/rutinas_recreativas-listar.component';
import { Rutinas_recreativasInsertarComponent } from './component/rutinas_recreativas/rutinas_recreativas-insertar/rutinas_recreativas-insertar.component'

import { EstadoComponent } from './component/estado/estado.component';
import { EstadoListarComponent } from './component/estado/estado-listar/estado-listar.component';
import { EstadoInsertarComponent } from './component/estado/estado-insertar/estado-insertar.component'


@NgModule({
  declarations: [
    AppComponent,
    EspecialidadListarComponent,
    EspecialidadComponent,
    EspecialidadInsertarComponent,
    DisponibilidadComponent,
    DisponibilidadListarComponent,
    DisponibilidadInsertarComponent,
    Rutinas_recreativasComponent,
    Rutinas_recreativasListarComponent,
    Rutinas_recreativasInsertarComponent,
    EstadoComponent,
    EstadoListarComponent,
    EstadoInsertarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

