import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { TopNavbarComponent } from './home/topNavbar/topNavbar.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './home/itemList/itemList.component';
import { ItemDetailsComponent } from './home/itemDetails/itemDetails.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddItemComponent } from './home/addItem/addItem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ItemListComponent,
    ItemDetailsComponent,
    TopNavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'itemDetails/:id', component: ItemDetailsComponent},
      {path: 'itemList', component: ItemListComponent},
      {path: 'addItem', component: AddItemComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '#', redirectTo: 'welcome'}
    ])
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
