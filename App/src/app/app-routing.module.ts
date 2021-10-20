import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "chat",
    loadChildren: () => import("./chat/chat.module").then(m => m.ChatModule)
  }, { path: 'Citas', loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule) },
  { path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'animal', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
