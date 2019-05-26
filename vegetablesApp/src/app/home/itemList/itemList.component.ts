import { Component, Output } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router } from '@angular/router';

@Component({
  templateUrl: './itemList.component.html'
})

export class ItemListComponent {
  constructor(private router: Router) {}

  pageTitle = 'Item List';
  collection = data.vegetables;
  show = -1;

  deleteMe(index: number) {
    this.collection.splice(index, 1);
    this.router.navigate(['/itemList']);
  }
  onBack() {
    this.router.navigate(['/welcome']);
  }

  showItem(index: number) {
    if (index === this.show) {
      this.show = -1;
    } else {
      this.show = index;
    }
  }
}
