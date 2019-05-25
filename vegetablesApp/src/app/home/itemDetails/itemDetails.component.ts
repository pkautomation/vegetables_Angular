import { Component } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router, ActivatedRoute } from '@angular/router';
import { Vegetable } from 'src/app/models/vegetable.js';

@Component({
  templateUrl: 'ItemDetails.component.html'
})
export class ItemDetailsComponent {
  public pageTitle = 'Welcome';
  collection = data.vegetables;
  //selectedItem
  desiredItem: Vegetable;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  value: number;

  ngOnInit() {
    // get URL parameters
    this.route.params.subscribe(params => {
      this.value = params.id; // --> Name must match wanted parameter
      console.log('index:' + this.value);
      this.desiredItem = this.collection.find( x => x.id == this.value);
      console.log(this.desiredItem.name);
  });
}

  onBack() {
    this.router.navigate(['/welcome']);
  }
}
