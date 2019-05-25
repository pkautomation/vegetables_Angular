import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../datasource/items.json';

@Component({
  templateUrl: './addItem.component.html'
})
export class AddItemComponent {
  constructor(private router: Router) {}

  vegetables = data.vegetables;

  public vegetableName: string;
  public vegetableDescription: string;

  public onSubmit() {
    const maxvalue = this.vegetables[this.vegetables.length - 1].id;
    this.vegetables.push({
      id: maxvalue + 1,
      name: this.vegetableName,
      description: this.vegetableDescription
    });

    this.router.navigate(['/itemList']);
  }

  public onBack() {
    this.router.navigate(['/welcome']);
  }
}
