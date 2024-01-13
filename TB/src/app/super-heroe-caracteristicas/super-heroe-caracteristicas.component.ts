import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { Super } from '../super';
import { CommonModule } from '@angular/common';
import { SuperHeroesService } from '../super-heroes.service';
import { ListaSuperHeroesComponent } from '../lista-super-heroes/lista-super-heroes.component';
import { AddSuperComponent } from '../add-super/add-super.component';
@Component({
  selector: 'app-super-heroe-caracteristicas',
  standalone: true,
  imports: [
    RouterModule,
    AddSuperComponent,
    CommonModule,
    ListaSuperHeroesComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './super-heroe-caracteristicas.component.html',
  styleUrl: './super-heroe-caracteristicas.component.css',
})
export class SuperHeroeCaracteristicasComponent {
  modificar: boolean = false;
  id: number = 0;

  Eliminar() {
    this.info.deleteSuper(this.info.ListaSupers[this.id].id, this.id);
  }

  constructor(private route: ActivatedRoute, public info: SuperHeroesService) {
    this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });
  }
}
