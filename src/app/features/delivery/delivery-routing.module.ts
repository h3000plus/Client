import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { RestaurantsListComponent } from '../../shared/components/restaurants/restaurants-list.component';
import { PopularComponent } from './components/popular/popular.component';
import { RecentyViewedComponent } from './components/recenty-viewed/recenty-viewed.component';
import { Top10Component } from './components/top10/top10.component';
import { RecommendedComponent } from './components/recommended/recommended.component';

const routes: Routes = [
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
  {
    path: 'delivery',
    children: [
      {
        path: 'popular',
        component: PopularComponent
      },
      {
        path: 'recently-viewed',
        component: RecentyViewedComponent
      },
      {
        path: 'top-10',
        component: Top10Component
      },
      {
        path: 'recommended',
        component: RecommendedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
