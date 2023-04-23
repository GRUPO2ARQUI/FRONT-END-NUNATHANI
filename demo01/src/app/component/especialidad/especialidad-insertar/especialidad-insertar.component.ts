import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Especialidad } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-especialidad-insertar',
  templateUrl: './especialidad-insertar.component.html',
  styleUrls: ['./especialidad-insertar.component.css']
})
export class EspecialidadInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  especialidad: Especialidad = new Especialidad();
  mensaje: string = '';
  constructor(private eS: EspecialidadService, private router: Router, private route :ActivatedRoute) { }


  ngOnInit(): void {
    
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
   
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
      if (this.edicion) {
        //guardar lo actualizado
        this.eS.update(this.especialidad).subscribe(() => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
       }else{
        this.eS.insert(this.especialidad).subscribe((data) => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
       }

      this.router.navigate(['especialidad']);
    } else {

      this.mensaje = 'Ingrese todos los campos';
    }

  }
  init() {
    if (this.edicion) {
      this.eS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          tipoEspecialidad: new FormControl(data.tipoEspecialidad),
          descripcionEspecialidad: new FormControl(data.descripcionEspecialidad),
          centroEspecialidad: new FormControl(data.centroEspecialidad),
        });
      });
    }
  }







}
