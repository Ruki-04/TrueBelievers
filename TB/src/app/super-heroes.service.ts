import { Injectable } from '@angular/core';
import { Super } from './super';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroesService {
  ListaSupers: Array<Super> = [];

  constructor(private http: HttpClient) {
    this.getSupers();
  }

  getSupers(): void {
    this.http
      .get<Super[]>('http://localhost:3000/supers')
      .subscribe((nuevo) => {
        this.ListaSupers = nuevo;
      });
  }

  aux: Super = new Super();
  getSuper(id: string): void {
    this.http
      .get<Super>('http://localhost:3000/supers/' + id)
      .subscribe((nuevo) => {
        this.aux = nuevo;
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

  deleteSuper(x: string): void {
    this.http
      .delete<Super[]>('http://localhost:3000/supers/' + x)
      .subscribe((data) => {
        this.ListaSupers = data;
      });
  }
  putSuper(miSuper: Super): void {
    this.http
      .put<Super[]>('http://localhost:3000/supers/' + miSuper.id, miSuper)
      .subscribe((data) => {
        this.ListaSupers = data;
      });
  }
}
