import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalListRoutingModule } from './animal-list-routing.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnimalListRoutingModule,
    MatIconModule
  ]
})
export class AnimalListModule { }
