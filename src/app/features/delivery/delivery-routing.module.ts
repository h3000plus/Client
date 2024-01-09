import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { RestaurantsListComponent } from '../../shared/components/restaurants/restaurants-list.component';

const routes: Routes = [
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'delivery',
    children: [
      {
        path: 'restaurants-list',
        component: RestaurantsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
