import { Component, OnInit } from '@angular/core';
import usersData from '../../assets/users.json';
import {UsersService} from '../services/users.service';
import {User} from '../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor( private usersService: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.usersService.getAllUsers();
  }

  deleteUsers(id: string) {
    this.usersService.deleteUser(Number(id)).subscribe(
      (data) => {
        this.getAllUsers();
      });
  }
}
