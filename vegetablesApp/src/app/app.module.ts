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
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'itemDetails/:id', component: ItemDetailsComponent},
      {path: 'itemList', component: ItemListComponent},
      {path: 'addItem', component: AddItemComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '#', redirectTo: 'welcome'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
