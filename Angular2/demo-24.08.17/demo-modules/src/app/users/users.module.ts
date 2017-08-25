import { UsersService } from './users.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [UsersListComponent, UserComponent],
  providers: []
})
export class UsersModule { }
