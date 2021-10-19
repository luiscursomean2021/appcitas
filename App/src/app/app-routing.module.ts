import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'Citas', loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule) },
{ path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{ path: "usuarios", loadChildren: () => import("./Core/users/users.module").then(m => m.UsersModule) }, { path: 'animal', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
