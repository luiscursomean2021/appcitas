import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PublicComponent } from './public.component';

const routes: Routes = [{
  path: '', component: PublicComponent},
  { path: 'fav', component: AnimalListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
