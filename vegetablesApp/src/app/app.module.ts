import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './home/itemList/itemList.component';
import { ItemDetailsComponent } from './home/itemDetails/itemDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ItemListComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'itemDetails/:id', component: ItemDetailsComponent},
      {path: 'itemList', component: ItemListComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, ItemListComponent]
})
export class AppModule { }
