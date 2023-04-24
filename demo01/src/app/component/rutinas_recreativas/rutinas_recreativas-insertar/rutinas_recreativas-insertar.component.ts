import { Rutinas_recreativasService } from 'src/app/service/rutinas_recreativas.service';
import { Rutinas_recreativas } from 'src/app/model/rutinas_recreativas';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-rutinas_recreativas-insertar',
  templateUrl: './rutinas_recreativas-insertar.component.html',
  styleUrls: ['./rutinas_recreativas-insertar.component.css'],
})
export class Rutinas_recreativasInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  rutinas_recreativas: Rutinas_recreativas = new Rutinas_recreativas();
  mensaje: string = '';
  //maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(private rS: Rutinas_recreativasService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
    });
  }
  aceptar(): void {
    this.rutinas_recreativas.id = this.form.value['id'];
    this.rutinas_recreativas.nombre = this.form.value['nombre'];
    this.rutinas_recreativas.descripcion = this.form.value['descripcion'];

    // Corrección en el bloque condicional
    if (this.edicion) {
      //guardar lo actualizado
      this.rS.update(this.rutinas_recreativas).subscribe(() => {
        this.rS.list().subscribe((data) => {
          this.rS.setList(data);
        });
      });}
      else {
        this.rS.insert(this.rutinas_recreativas).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
      this.router.navigate(['rutinas_recreativas']);
  }
  init() {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
        });
      });
    }
  }
}
