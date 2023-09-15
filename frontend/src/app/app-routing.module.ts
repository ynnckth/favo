import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'browse',
    component: FavouritesListComponent,
    title: 'Browse',
  },
  /*
    {
      path: 'capture',
      component: CaptureFavouriteComponent,
      title: 'Capture',
    },
     */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
