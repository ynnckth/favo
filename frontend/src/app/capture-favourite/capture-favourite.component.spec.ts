import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureFavouriteComponent } from './capture-favourite.component';

describe('CaptureFavouriteComponent', () => {
  let component: CaptureFavouriteComponent;
  let fixture: ComponentFixture<CaptureFavouriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaptureFavouriteComponent]
    });
    fixture = TestBed.createComponent(CaptureFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
