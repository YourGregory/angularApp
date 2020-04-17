import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AppRoutingModule } from './app.routing.module';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'users', component: UsersListComponent},
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
