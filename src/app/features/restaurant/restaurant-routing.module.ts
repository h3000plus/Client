import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';

const routes: Routes = [
  {
    path: 'restaurant/:_id',
    component: RestaurantComponent,
  },
  {
    path: 'restaurant/search/:_id',
    component: SearchItemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
