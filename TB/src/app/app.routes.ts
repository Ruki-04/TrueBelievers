import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuperHeroeCaracteristicasComponent } from './super-heroe-caracteristicas/super-heroe-caracteristicas.component';
import { ListaSuperHeroesComponent } from './lista-super-heroes/lista-super-heroes.component';
import { ComicsComponent } from './comics/comics.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ListaSupers', component: ListaSuperHeroesComponent },
  { path: 'Comics', component: ComicsComponent },
  { path: 'Shop', component: ShopComponent },
  {
    path: 'caracteristicas/:id',
    component: SuperHeroeCaracteristicasComponent,
  },
  {
    path: 'ListaSupers/caracteristicas/:id',
    component: SuperHeroeCaracteristicasComponent,
  },
  {
    path: 'caracteristicas',
    component: SuperHeroeCaracteristicasComponent,
  },
];
