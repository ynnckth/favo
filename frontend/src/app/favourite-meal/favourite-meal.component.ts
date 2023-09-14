import { Component, Input } from '@angular/core';
import {
  faUtensils,
  faLocationDot,
  faDollarSign,
  faStar,
  faComment,
  faHashtag,
  faPersonBiking,
} from '@fortawesome/free-solid-svg-icons';
import { Eatery, Meal } from '../eatery';

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
  deliveryIcon = faPersonBiking;
}
