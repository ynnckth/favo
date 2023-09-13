import { Component, OnInit } from '@angular/core';
import { Eatery, FavouritesService } from './favourites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  favouriteEateries: Eatery[] = [];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.favouritesService.getFavouriteEateries().subscribe((eateries) => (this.favouriteEateries = eateries));
  }
}
