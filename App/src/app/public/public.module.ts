import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MaterialModule } from '../material.module';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService } from '../Core/Services/Animal.service';
import { UsersService } from '../Core/Services/users.service';



@NgModule({
  declarations: [
    PublicComponent,
    FavoritosComponent,
    AnimalListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ], providers:[
    AnimalService,
    UsersService
  ]
})
export class PublicModule { }
