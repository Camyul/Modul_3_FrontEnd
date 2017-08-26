import { UsersListComponent } from './users/users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true} )], // {enableTracing: true} дава инфо в конзолата през кои рутове минаваме

  exports: [RouterModule]
})
export class AppRoutingModule { }
