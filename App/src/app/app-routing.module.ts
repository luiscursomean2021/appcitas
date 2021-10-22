import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './Core/Security/login-guard.guard';
import { TypeUserGuardGuard } from './Core/Security/type-user-guard.guard';

const routes: Routes = [
  {
    path: "chat",
    loadChildren: () => import("./chat/chat.module").then(m => m.ChatModule),
    //canActivate: [LoginGuardGuard]
  },
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas.module').then(m => m.CitasModule),
    canActivate: [LoginGuardGuard]
  },
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    
  },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule),
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [LoginGuardGuard, TypeUserGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
