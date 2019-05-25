import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './addItem.component.html'
})
export class AddItemComponent {
  constructor(private router: Router) {}

  public onBack() {
    this.router.navigate(['/welcome']);
  }
}
