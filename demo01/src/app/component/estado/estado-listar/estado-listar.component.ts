import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { EstadoService } from 'src/app/service/estado';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.css'],
})
export class EstadoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Estado> = new MatTableDataSource();
  lista: Estado[] = [];
  displayedColumns: string[] = [
    'No',
    'Disponibilidad',
  ];
  constructor(private rS: EstadoService) {}
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}