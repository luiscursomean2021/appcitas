import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { PublicComponent } from './public.component';

const routes: Routes = [{
  path: '', component: PublicComponent, children: [
    { path: '', component: AnimalListComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
