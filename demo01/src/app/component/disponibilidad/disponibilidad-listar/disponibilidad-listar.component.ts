import { Component, OnInit } from '@angular/core';
import { Disponibilidad } from 'src/app/model/disponibilidad';
import { DisponibilidadService } from 'src/app/service/disponibilidad.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-disponibilidad-listar',
  templateUrl: './disponibilidad-listar.component.html',
  styleUrls: ['./disponibilidad-listar.component.css'],
})
export class DisponibilidadListarComponent implements OnInit {
  dataSource: MatTableDataSource<Disponibilidad> = new MatTableDataSource();
  lista: Disponibilidad[] = [];
  displayedColumns: string[] = [
    'No',
    'Inicio del turno',
    'Fin del turno',
    'Dias laborales',
  ];
  constructor(private dS: DisponibilidadService) {}
  ngOnInit(): void {
    this.dS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
