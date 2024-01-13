import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { Super } from '../super';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-super-heroe',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule],
  templateUrl: './super-heroe.component.html',
  styleUrl: './super-heroe.component.css',
})
export class SuperHeroeComponent {
  modificar: boolean = false;
  @Input() j: number = -1;
  constructor(public info: SuperHeroesService) {}

  ngOnInit() {}
}
