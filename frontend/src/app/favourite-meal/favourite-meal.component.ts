import { Component, Input } from '@angular/core';
import { Eatery, Meal } from '../favourites.service';
import {
  faUtensils,
  faLocationDot,
  faDollarSign,
  faStar,
  faComment,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favourite-meal',
  templateUrl: './favourite-meal.component.html',
  styleUrls: ['./favourite-meal.component.css'],
})
export class FavouriteMealComponent {
  @Input() meal?: Meal;
  @Input() correspondingEatery?: Eatery;

  mealIcon = faUtensils;
  eateryIcon = faLocationDot;
  priceIcon = faDollarSign;
  ratingIcon = faStar;
  commentIcon = faComment;
  tagIcon = faHashtag;
}
