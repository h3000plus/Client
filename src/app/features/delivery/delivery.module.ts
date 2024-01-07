import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DeliveryComponent } from './delivery.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryRestaurantGridComponent } from './components/category-restaurant-grid/category-restaurant-grid.component';
import { SearchModule } from '../search/search.module';
import { RestaurantsByCategoryComponent } from './components/restaurants-by-category/restaurants-by-category.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    DeliveryComponent,
    CategoryListComponent,
    CategoryRestaurantGridComponent,
    RestaurantsByCategoryComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    SharedModule,
    SearchModule
  ]
})
export class DeliveryModule { }
