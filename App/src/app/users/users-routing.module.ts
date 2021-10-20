import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent, children:[
    { path: '', component: UsersListComponent },
    { path: 'editUser/:id', component: UsersFormComponent },
    { path: 'newUser', component: UsersFormComponent }, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
