import { Component, Input } from '@angular/core';
import { Eatery, Meal } from '../favourites.service';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css'],
})
export class FavouritesListComponent {
  @Input() eateries: Eatery[] = [];

  getFavouriteMeals(): Meal[] {
    return this.eateries.flatMap((eatery) => eatery.meals);
  }

  getEateryForMeal(meal: Meal): Eatery {
    return this.eateries.find((eatery) => eatery.meals.some((m) => m.id === meal.id))!;
  }
}
