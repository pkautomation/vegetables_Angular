import { Component, Input } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router, ActivatedRoute } from '@angular/router';
import { Vegetable } from 'src/app/models/vegetable.js';

@Component({
  templateUrl: 'ItemDetails.component.html'
})
export class ItemDetailsComponent {
  pageTitle = 'Details';
  collection = data.vegetables;
  desiredItem: Vegetable;
  value: number;

  constructor(private route: ActivatedRoute, private router: Router) {}


// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.value = params.id; // --> Name must match wanted parameter
      console.log('index:' + this.value);
      this.desiredItem = this.collection.find( x => x.id == this.value);
      console.log(this.desiredItem.name);
    });
  }

  onBack() {
    this.router.navigate(['/itemList']);
  }
}
