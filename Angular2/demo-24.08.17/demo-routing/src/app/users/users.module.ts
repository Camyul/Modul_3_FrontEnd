import { UsersGuardService } from './guards/users-guard.service';
import { UsersResolver } from './users-resolver';
import { UsersService } from './users.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [UsersListComponent, UserComponent, UserDetailsComponent],
  providers: [UsersResolver, UsersGuardService]
})
export class UsersModule { }
