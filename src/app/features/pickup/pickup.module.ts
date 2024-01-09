import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickupRoutingModule } from './pickup-routing.module';
import { PickupComponent } from './pickup.component';
import { SearchModule } from '../search/search.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoryRestaurantGridComponent } from '../delivery/components/category-restaurant-grid/category-restaurant-grid.component';
import { AddressComponent } from './components/address/address.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PickupRestaurantGridComponent } from './components/pickup-restaurant-grid/pickup-restaurant-grid.component';
import { SearchCategoriesComponent } from './components/search-categories/search-categories.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';


@NgModule({
  declarations: [
    PickupComponent,
    AddressComponent,
    CategoryListComponent,
    PickupRestaurantGridComponent,
    SearchCategoriesComponent,
    TopCategoriesComponent,
    
  ],
  imports: [
    CommonModule,
    PickupRoutingModule,
    SearchModule,
    SharedModule
  ]
})
export class PickupModule { }
