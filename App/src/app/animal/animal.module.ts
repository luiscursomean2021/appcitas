import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';
import { ListaComponent } from './lista/lista.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormComponent } from './form/form.component';
import { AnimalComponent } from './animal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListaComponent,
    FormComponent,
    AnimalComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AnimalModule { }
