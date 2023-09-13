import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteMealComponent } from './favourite-meal.component';

describe('FavoriteMealComponent', () => {
  let component: FavouriteMealComponent;
  let fixture: ComponentFixture<FavouriteMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteMealComponent],
    });
    fixture = TestBed.createComponent(FavouriteMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
