import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { FavouriteMealComponent } from './favourite-meal/favourite-meal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FavouritesListComponent, FavouriteMealComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
