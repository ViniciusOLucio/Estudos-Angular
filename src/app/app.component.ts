import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  UserName = 'Joca';
  userData = {
    email: 'joca@jaloca.com',
    role: 'Ademiro',
  }

  title = 'my-app';
}
