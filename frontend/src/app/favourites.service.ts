import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockEateries } from './mockdata';
import { Eatery } from './types/eatery';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor() {}

  // TODO: fetch from backend instead
  getFavouriteEateries(): Observable<Eatery[]> {
    return of(mockEateries);
  }
}
