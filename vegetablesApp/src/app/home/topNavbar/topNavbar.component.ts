import { Component, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './topNavbar.component.html',
  selector: 'app-navbar'
})

export class TopNavbarComponent {
  @Input() pageTitle = 'Home Page';
  @Input() isMainPage = false;
  @Input() isAddPage = false;

  @Output() clickBack = new EventEmitter();

  public constructor(public router: Router) {}

  @Input() public Back() {
    this.clickBack.emit();
  }
}
