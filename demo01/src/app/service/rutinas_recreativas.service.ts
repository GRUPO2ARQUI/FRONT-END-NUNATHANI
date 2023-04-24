import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rutinas_recreativas } from '../model/rutinas_recreativas';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class Rutinas_recreativasService {
  private url = `${base_url}/rutinas_recreativas`
  private listaCambio = new Subject<Rutinas_recreativas[]>();
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Rutinas_recreativas[ ]>(this.url);
  }
  insert(Rutinas_recreativas: Rutinas_recreativas) {
    return this.http.post(this.url, Rutinas_recreativas);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Rutinas_recreativas[]) {
    this.listaCambio.next(listaNueva);
  }
  listId(id: number) {
    return this.http.get<Rutinas_recreativas>(`${this.url}/${id}`);
  }
  update(d: Rutinas_recreativas) {
    return this.http.put(this.url + '/' + d.id, d);
  }
}
