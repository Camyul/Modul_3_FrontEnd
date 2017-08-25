import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  // providers: [UsersService]
})
export class UsersListComponent implements OnInit {

users;

  constructor(private UsersService: UsersService) { }

  addUser(name) {
    const id = this.UsersService.users.length + 1;
    this.UsersService.addUser({id: id, name: name});
  }

  ngOnInit() {
    this.users = this.UsersService.getAll();
  }

}
