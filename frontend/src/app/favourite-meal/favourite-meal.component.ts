import { Component, Input } from '@angular/core';
import { Eatery, Meal } from '../favourites.service';

@Component({
  selector: 'app-favourite-meal',
  templateUrl: './favourite-meal.component.html',
  styleUrls: ['./favourite-meal.component.css'],
})
export class FavouriteMealComponent {
  @Input() meal?: Meal;
  @Input() correspondingEatery?: Eatery;
}
