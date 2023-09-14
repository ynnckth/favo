import { Component, OnInit } from '@angular/core';
import { FavouritesService } from './favourites.service';
import { Eatery } from './eatery';

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
