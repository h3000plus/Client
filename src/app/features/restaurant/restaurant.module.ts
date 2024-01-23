import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { FeaturedItemsComponent } from './components/featured-items/featured-items.component';
import { ItemsByCategoryComponent } from './components/items-by-category/items-by-category.component';
import { ScrollCategoriesComponent } from './components/scroll-categories/scroll-categories.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';


@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantInfoComponent,
    FeaturedItemsComponent,
    ItemsByCategoryComponent,
    ScrollCategoriesComponent,
    SearchItemsComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
