import { Component } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router } from '@angular/router';
import { Vegetable } from 'src/app/models/vegetable.js';

@Component({
  templateUrl: './itemList.component.html'
})

export class ItemListComponent {
  public pageTitle = 'Welcome';
  collection = data.vegetables;
  //public veges: Vegetable[] = JSON.parse('../../datasource/items.json');

  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/welcome']);
  }

  deleteMe(index: number) {
    this.collection.splice(index, 1);
    this.router.navigate(['/itemList']);
  }
}
