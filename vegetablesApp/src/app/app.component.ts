import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <ul class='nav nabar-nav'>
  <li><a [routerLink]="['/welcome']">Main Page</a></li>
  <li><a [routerLink]="['/itemList']">Item List</a></li>
  </ul>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  title = 'vegetablesApp';

}
