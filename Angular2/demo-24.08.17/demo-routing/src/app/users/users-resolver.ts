import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private UsersService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.UsersService.getAll();
  }


}
