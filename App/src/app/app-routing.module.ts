import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';


const routes: Routes = [{ path: 'Citas', loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule) },
{ path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{ path: 'animal', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule) },
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'listaAnimales', loadChildren: () => import('./animal-list/animal-list.module').then(m => m.AnimalListModule) },
{ path: 'favoritos', component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
