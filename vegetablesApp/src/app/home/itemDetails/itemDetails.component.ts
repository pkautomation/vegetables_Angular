import { Component } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'ItemDetails.component.html'
})
export class ItemDetailsComponent {
  public pageTitle = 'Welcome';
  collection = data.something;

  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/itemList']);
  }
}
