import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NASA Picture Generator';
  logo = './assets/nasa_logo.png';

  constructor() { }
  
}
