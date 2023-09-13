import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { FavouriteMealComponent } from './favourite-meal/favourite-meal.component';

@NgModule({
  declarations: [AppComponent, FavouritesListComponent, FavouriteMealComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
