import { TestBed } from '@angular/core/testing';

import { FavouritesService } from './favourites.service';

describe('FavoritesServiceService', () => {
  let service: FavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
