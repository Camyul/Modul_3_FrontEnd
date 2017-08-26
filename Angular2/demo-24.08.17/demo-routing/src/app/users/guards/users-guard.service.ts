import { UsersService } from './../users.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const id = +route.params['id'];

    const userFound = !!this.usersService.getById(id);

    let check = true;

    if (userFound) {
      check = true;
    } else {
      this.router.navigate(['/home']); // Ako няма юзер с такова id, редиректва към 'home'
      check = false;
    }

    return check;
  }

  constructor(private usersService: UsersService, private router: Router) { }

}
