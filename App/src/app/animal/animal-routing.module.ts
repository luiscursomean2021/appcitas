import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', component: AnimalComponent, children:[
    { path: '', component: ListaComponent },
    { path: 'nuevo', component: FormComponent },
    { path: 'edit/:id', component: FormComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
