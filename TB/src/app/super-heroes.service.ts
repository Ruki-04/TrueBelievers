import { Injectable } from '@angular/core';
import { Super } from './super';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroesService {
  ListaSupers: Array<Super> = [];

  constructor(private http: HttpClient) {}

  getSupers(): void {
    this.http
      .get<Super[]>('http://localhost:3000/supers')
      .subscribe((nuevo) => {
        this.ListaSupers = nuevo;
      });
  }

  postSuper(Super: Super): void {
    this.http
      .post<Super>('http://localhost:3000/supers', Super)
      .subscribe((nuevo) => {
        this.ListaSupers.push(nuevo);
      });
    this.getSupers();
  }

  deleteSuper(x: string, j: number): void {
    this.http
      .delete<Super>('http://localhost:3000/supers/' + x)
      .subscribe((data) => {
        this.ListaSupers.splice(j, 1);
      });
  }
  putSuper(miSuper: Super, j: number): void {
    this.http
      .put<Super>('http://localhost:3000/supers/' + miSuper.id, miSuper)
      .subscribe((data) => {
        this.ListaSupers[j] = data;
      });
  }
  Actualizar(busqueda: string): void {
    if (busqueda == '') {
      this.getSupers();
    } else {
      let nuevo: Super[] = [];
      for (let i of this.ListaSupers) {
        if (i.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) != -1) {
          nuevo.push(i);
        }
      }
      this.ListaSupers = nuevo;
    }
  }
}
