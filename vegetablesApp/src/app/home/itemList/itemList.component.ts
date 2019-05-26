import { Component, Output } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router } from '@angular/router';

@Component({
  templateUrl: './itemList.component.html'
})

export class ItemListComponent {
  public pageTitle = 'Item List';

  collection = data.vegetables;
  //public veges: Vegetable[] = JSON.parse('../../datasource/items.json');

  constructor(private router: Router) {}


  deleteMe(index: number) {
    this.collection.splice(index, 1);
    this.router.navigate(['/itemList']);
  }
  onBack($event) {
    this.router.navigate(['/welcome']);
  }
}
