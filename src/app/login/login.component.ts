import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {last} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit(firstName: string, lastName: string) {
    const confirmedFirstName = localStorage.getItem('firstName');
    const confirmedLastName = localStorage.getItem('lastName');
    if (firstName === confirmedFirstName && lastName === confirmedLastName) {
      this.router.navigate(['/users']);
    } else {
      alert('Invalid credentials');
    }
  }

  onCancel() {
    this.router.navigate(['/register']);
  }

}
