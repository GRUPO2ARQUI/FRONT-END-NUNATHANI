import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../model/especialidad';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  private url=`${base_url}/Especialidad`;
  private listaCambio = new Subject<Especialidad[]>();

  constructor(private http:HttpClient) { }
  list(){
  return this.http.get<Especialidad[]>(this.url);
  }
  insert(especialidad: Especialidad) {
    return this.http.post(this.url, especialidad);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Especialidad[]) {
    this.listaCambio.next(listaNueva);
  }
  
  listId(id: number) {
    return this.http.get<Especialidad>(`${this.url}/${id}`);
  }
  update(E: Especialidad) {
    return this.http.put(this.url + '/' + E.id, E);
  }
  


}
