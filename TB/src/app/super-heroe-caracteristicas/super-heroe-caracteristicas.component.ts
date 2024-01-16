import { Component, OnInit } from '@angular/core';
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
export class SuperHeroeCaracteristicasComponent implements OnInit {
  modificar: boolean = false;
  id!: string;

  Eliminar() {
    this.info.deleteSuper(this.id);
  }

  constructor(private route: ActivatedRoute, public info: SuperHeroesService) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.info.getSuper(this.id);
    });
  }
}
