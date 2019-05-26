import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../datasource/items.json';
import { Router, ActivatedRoute } from '@angular/router';
import { Vegetable } from 'src/app/models/vegetable.js';

@Component({
  templateUrl: 'ItemDetails.component.html'
})
export class ItemDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  pageTitle = 'Details';
  collection = data.vegetables;
  desiredItem: Vegetable;
  id: number;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.desiredItem = this.collection.find( x => x.id == this.id);
    });
  }

  onBack() {
    this.router.navigate(['/itemList']);
  }
}
