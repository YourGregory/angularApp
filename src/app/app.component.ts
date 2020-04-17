import { Component } from '@angular/core';
import usersData from '../assets/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Players: any = usersData;

  title = 'angularApp';
}
