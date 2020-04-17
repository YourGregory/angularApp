import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addForm: FormGroup;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsersService) { }

  createUser(user: User, lastName: string, role: string) {
    this.userService.currentUser.lastName = lastName;
    this.userService.currentUser.role = role;
    this.userService.createUser(user).subscribe(
      (result: User) => {
        this.userService.getAllUsers();
        this.clearUser();
      });
  }

  clearUser() {
    this.userService.currentUser = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      role: ''
    };
  }
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit(firstName: string, lastName: string) {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    this.router.navigate(['/login']);
  }

  onCancel() {
    this.router.navigate(['/users']);
  }
}
