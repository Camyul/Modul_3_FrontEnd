import { UsersGuardService } from './guards/users-guard.service';
import { UsersResolver } from './users-resolver';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './../users/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full'},
  { path: 'all', component: UsersListComponent, resolve: {
    'users': UsersResolver
  } },
  { path: ':id', component: UsersListComponent,
  canActivate: [UsersGuardService] } // canActivate: [UsersGuardService] не гърми, когато няма такова id
  // { path: ':id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
