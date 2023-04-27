import { Component,OnInit } from '@angular/core';
import { Especialidad } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { MatTableDataSource} from '@angular/material/table'


@Component({
  selector: 'app-especialidad-listar',
  templateUrl: './especialidad-listar.component.html',
  styleUrls: ['./especialidad-listar.component.css']
})
export class EspecialidadListarComponent implements OnInit{

  dataSource:MatTableDataSource<Especialidad>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','tipo','descripcion','centro','ceditar']
  constructor(private eS:EspecialidadService){

  }
 ngOnInit(): void {
  this.eS.list().subscribe(data=>{
    this.dataSource= new MatTableDataSource(data);
  });
   
  this.eS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
  });

 }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  
}
