import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="logo-container">
    <img [src]="logo" class="logo"/>
  </div>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  logo: string = '../assets/logo.png'
}
