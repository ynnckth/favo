import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Eatery, Meal } from '../eatery';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css'],
})
export class FavouritesListComponent implements OnChanges {
  @Input() eateries: Eatery[] = [];
  filteredEateries: Eatery[] = [];
  searchTerm: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eateries']) {
      this.filteredEateries = this.eateries;
    }
  }

  getFavouriteMeals(): Meal[] {
    return this.filteredEateries.flatMap((eatery) => eatery.meals);
  }

  getEateryForMeal(meal: Meal): Eatery {
    return this.filteredEateries.find((eatery) => eatery.meals.some((m) => m.id === meal.id))!;
  }

  filterResults() {
    if (!this.searchTerm) {
      this.filteredEateries = this.eateries;
      return;
    }
    const searchString = this.searchTerm.toLowerCase();
    this.filteredEateries = this.eateries.filter(
      (eatery) =>
        eatery.name.toLowerCase().includes(searchString) ||
        eatery.meals.some(
          (meal) =>
            meal.name.toLowerCase().includes(searchString) ||
            meal.tags.some((tag) => tag.toLowerCase().includes(searchString)) ||
            meal.comments.some((comment) => comment.toLowerCase().includes(searchString)),
        ) ||
        eatery.tags.some((tag) => tag.toLowerCase().includes(searchString)) ||
        eatery.supportedDeliveryPlatforms.some((delivery) => delivery.toLowerCase().includes(searchString)),
    );
  }

  resetSearchTerm() {
    this.searchTerm = '';
    this.filterResults();
  }
}
