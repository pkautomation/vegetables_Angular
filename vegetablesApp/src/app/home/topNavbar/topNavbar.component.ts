import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './topNavbar.component.html',
  selector: 'app-navbar'
})

export class TopNavbarComponent {
  public constructor(public router: Router) {}

  @Input() pageTitle: string;
  @Input() isMainPage = false;
  @Input() isAddPage = false;

  @Output() clickBack = new EventEmitter();
  @Output() clickClear = new EventEmitter();

  @Input() public emitBack() {
    this.clickBack.emit();
  }

  @Input() public emitClear() {
    this.clickClear.emit();
  }
}
