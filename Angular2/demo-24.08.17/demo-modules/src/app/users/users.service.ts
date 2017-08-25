import { Injectable } from '@angular/core';

export class UsersService {

  users = [
    {id: 1, name: 'Steven'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Cuki'},
  ];

  getAll() {
    return this.users;
  }

  addUser(user: {id: number, name: string}) {
    this.users.push(user);
  }
}
