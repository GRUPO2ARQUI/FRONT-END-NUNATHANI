import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Especialidad } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidad-insertar',
  templateUrl: './especialidad-insertar.component.html',
  styleUrls: ['./especialidad-insertar.component.css']
})
export class EspecialidadInsertarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  especialidad: Especialidad = new Especialidad();
  mensaje: string = '';
  constructor(private pE: EspecialidadService, private router: Router) { }


  ngOnInit(): void {
    this.form = new FormGroup({

      id: new FormControl(),
      tipoEspecialidad: new FormControl(),
      centroEspecialidad: new FormControl(),
      descripcionEspecialidad: new FormControl()
    });

  }

  aceptar(): void {

    this.especialidad.id = this.form.value['id'];
    this.especialidad.tipoEspecialidad = this.form.value['tipoEspecialidad'];
    this.especialidad.descripcionEspecialidad = this.form.value['descripcionEspecialidad'];
    this.especialidad.centroEspecialidad = this.form.value['centroEspecialidad'];

    if (this.form.value['tipoEspecialidad'].length > 0) {

      this.pE.insert(this.especialidad).subscribe((data) => {
        this.pE.list().subscribe((data) => {
          this.pE.setList(data);
        });
      });
      this.router.navigate(['especialidad']);
    } else {

      this.mensaje = 'Ingrese todos los campos';
    }

  }













}
