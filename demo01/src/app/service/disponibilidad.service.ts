import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disponibilidad } from '../model/disponibilidad';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {
  private url = `${base_url}/disponibilidad`
  private listaCambio = new Subject<Disponibilidad[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Disponibilidad[ ]>(this.url);
  }
  insert(disponibilidad: Disponibilidad) {
    return this.http.post(this.url, disponibilidad);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Disponibilidad[]) {
    this.listaCambio.next(listaNueva);
  }
}
