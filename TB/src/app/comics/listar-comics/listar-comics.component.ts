import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from '../comics/comics.component';
import { ComicsServiceService } from '../comics-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listar-comics',
  standalone: true,
  imports: [CommonModule, ComicsComponent, FormsModule],
  templateUrl: './listar-comics.component.html',
  styleUrl: './listar-comics.component.css',
})
export class ListarComicsComponent {
  busqueda: string = '';

  constructor(public info: ComicsServiceService) {}

  Actualizar() {
    this.info.Actualizar(this.busqueda);
  }
}
