import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroeComponent } from '../super-heroe/super-heroe.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    FormsModule,
    RouterOutlet,
    CommonModule,
    SuperHeroeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public info: SuperHeroesService) {}
}
