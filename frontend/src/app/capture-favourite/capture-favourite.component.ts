import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Eatery } from '../types/eatery';

@Component({
  selector: 'app-capture-favourite',
  templateUrl: './capture-favourite.component.html',
  styleUrls: ['./capture-favourite.component.css'],
})
export class CaptureFavouriteComponent {
  @Input() eateries: Eatery[] = [];

  newFavouriteMealForm = new FormGroup({
    mealName: new FormControl('', [Validators.required]),
    // TODO: add further fields
  });

  submitNewFavouriteMeal() {
    console.log(this.newFavouriteMealForm.valid);
    console.log('Submitting');
  }
}
