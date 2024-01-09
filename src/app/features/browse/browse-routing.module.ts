import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsByCategoryComponent } from './components/restaurants-by-category/restaurants-by-category.component';
import { BrowseComponent } from './browse.component';

const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'browse',
    children: [
      {
        path: 'category',
        component: RestaurantsByCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
