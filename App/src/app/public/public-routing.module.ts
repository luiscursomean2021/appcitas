import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: NavbarComponent, children:[
    { path: '', component: AnimalListComponent },
  ] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
