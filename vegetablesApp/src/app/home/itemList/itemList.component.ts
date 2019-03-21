import { Component } from '@angular/core';
import * as data from '../../datasource/items.json';

@Component({
  templateUrl: './itemList.component.html'
})
export class ItemListComponent {
  public pageTitle = 'Welcome';
  collection = data.something;
}
