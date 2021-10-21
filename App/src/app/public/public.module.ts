import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MaterialModule } from '../material.module';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { AnimalListComponent } from './animal-list/animal-list.component';



@NgModule({
  declarations: [
    PublicComponent,
    FavoritosComponent,
    AnimalListComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ]
})
export class PublicModule { }
