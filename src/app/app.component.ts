import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Yo men</h1>
  //   <p>{{myObject.location}}</p>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memory Game AngularJS';
  // myObject = {
  //   gender: 'male',
  //   age: 33,
  //   location: 'USA'
  // }
}
