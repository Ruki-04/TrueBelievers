import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from './Comic';

@Injectable({
  providedIn: 'root',
})
export class ComicsServiceService {
  ListaComics: Array<Comic> = [];

  constructor(private http: HttpClient) {
    this.getComics();
  }

  getComics(): void {
    this.http
      .get<Comic[]>('http://localhost:3000/comics')
      .subscribe((nuevo) => {
        this.ListaComics = nuevo;
      });
  }

  postSuper(c: Comic): void {
    this.http
      .post<Comic>('http://localhost:3000/supers', c)
      .subscribe((nuevo) => {
        this.ListaComics.push(c);
      });
  }

  deleteComic(c: string, j: number): void {
    this.http
      .delete<Comic>('http://localhost:3000/supers/' + c)
      .subscribe((data) => {
        this.ListaComics.splice(j, 1);
      });
  }
  putSuper(c: Comic, j: number): void {
    this.http
      .put<Comic>('http://localhost:3000/supers/' + c.id, c)
      .subscribe((data) => {
        this.ListaComics[j] = data;
      });
  }

  Actualizar(busqueda: string): void {
    if (busqueda == '') {
      this.getComics();
    } else {
      let nuevo: Comic[] = [];
      for (let i of this.ListaComics) {
        if (i.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) != -1) {
          nuevo.push(i);
        }
      }
      this.ListaComics = nuevo;
    }
  }
}
