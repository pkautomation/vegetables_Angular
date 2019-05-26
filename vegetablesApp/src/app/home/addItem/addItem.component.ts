import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../datasource/items.json';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './addItem.component.html'
})
export class AddItemComponent {
  addForm: FormGroup;

  constructor(private router: Router) {
    this.addForm = this.createFormGroup();
  }

  pageTitle = 'Add Item';
  vegetables = data.vegetables;
  isAddPage = true;

  public vegetableName: string;
  public vegetableDescription: string;

  createFormGroup() {
    return new FormGroup({
        name: new FormControl(),
        description: new FormControl()
    });
  }

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

  public clearFields() {
    this.addForm.setValue({
      name: '',
      description: ''
    });
  }
}
