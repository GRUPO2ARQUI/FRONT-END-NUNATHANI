import { Component, OnInit } from '@angular/core';
import { Rutinas_recreativas } from 'src/app/model/rutinas_recreativas';
import { Rutinas_recreativasService } from 'src/app/service/rutinas_recreativas.service';
import { MatTableDataSource } from '@angular/material/table';
 
@Component({
  selector: 'app-rutinas_recreativas-listar',
  templateUrl: './rutinas_recreativas-listar.component.html',
  styleUrls: ['./rutinas_recreativas-listar.component.css'],
})
export class Rutinas_recreativasListarComponent implements OnInit {
  dataSource: MatTableDataSource<Rutinas_recreativas> = new MatTableDataSource();
  lista: Rutinas_recreativas[] = [];
  displayedColumns: string[] = [
    'No',
    'Nombre de la rutina recreativa',
    'Descripcion',
    'ceditar',
  ];
  constructor(private rS: Rutinas_recreativasService) {}
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
