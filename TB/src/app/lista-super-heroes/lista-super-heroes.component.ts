import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { SuperHeroeComponent } from '../super-heroe/super-heroe.component';
import { SuperHeroesService } from '../super-heroes.service';
import { AddSuperComponent } from '../add-super/add-super.component';
import { FiltroPipe } from '../filtro.pipe';
@Component({
  selector: 'app-lista-super-heroes',
  standalone: true,
  imports: [
    HttpClientModule,
    FiltroPipe,
    RouterLink,
    FormsModule,
    RouterModule,
    RouterOutlet,
    CommonModule,

    SuperHeroeComponent,
    AddSuperComponent,
  ],
  templateUrl: './lista-super-heroes.component.html',
  styleUrl: './lista-super-heroes.component.css',
})
export class ListaSuperHeroesComponent {
  indexAux: number[] = [];
  vistaMod: boolean = false;
  busqueda: string = '';
  constructor(public info: SuperHeroesService) {}

  ngOnInit() {
    this.info.getSupers();
  }
}
