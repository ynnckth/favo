import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * A restaurant or a food stall
 */
export type Eatery = {
  id: string;
  name: string;
  country: string;
  city: string;
  locationDetails: string;
  comments: string[];
  rating: number;
  canDineIn: boolean;
  supportedDeliveryPlatforms: DeliveryPlatform[];
  meals: Meal[];
  tags: string[];
};

export type Meal = {
  id: string;
  name: string;
  comments: string[];
  price: number;
  rating: number;
  pictureUrl: string;
  tags: string[];
};

export enum DeliveryPlatform {
  FOODPANDA = 'Foodpanda',
  DELIVEROO = 'Deliveroo',
  GRAB = 'Grab',
}

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor() {}

  // TODO: fetch from backend instead
  getFavouriteEateries(): Observable<Eatery[]> {
    return of([
      {
        id: 'E001',
        name: 'Keisuke Four Seasons',
        country: 'Singapore',
        city: 'Singapore',
        locationDetails: 'Bugis/North Bridge Road',
        comments: ['Favourite ramen in town'],
        rating: 5,
        canDineIn: true,
        supportedDeliveryPlatforms: [DeliveryPlatform.FOODPANDA],
        meals: [
          {
            id: 'M001',
            name: 'Summer Ramen',
            comments: ['With flavored egg', 'Complimentary bean sprouts are delicious', 'Wasabi ginger ale'],
            price: 25,
            rating: 5,
            pictureUrl: '',
            tags: [],
          },
        ],
        tags: [],
      },
    ]);
  }
}
