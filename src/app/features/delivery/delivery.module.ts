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
import { AddressComponent } from './components/address/address.component';
import { RecentyViewedComponent } from './components/recenty-viewed/recenty-viewed.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { Top10Component } from './components/top10/top10.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchCategoriesComponent } from './components/search-categories/search-categories.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { FeeFilterComponent } from './components/fee-filter/fee-filter.component';
import { LikeFilterComponent } from './components/like-filter/like-filter.component';
import { ResultRestaurantComponent } from './components/result-restaurant/result-restaurant.component';
import { OfferComponent } from './components/offer/offer.component';


@NgModule({
  declarations: [
    DeliveryComponent,
    CategoryListComponent,
    CategoryRestaurantGridComponent,
    RestaurantsByCategoryComponent,
    FilterComponent,
    AddressComponent,
    RecentyViewedComponent,
    RecommendedComponent,
    Top10Component,
    PopularComponent,
    SearchCategoriesComponent,
    TopCategoriesComponent,
    PriceFilterComponent,
    FeeFilterComponent,
    LikeFilterComponent,
    ResultRestaurantComponent,
    OfferComponent,
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    SharedModule,
    SearchModule
  ]
})
export class DeliveryModule { }
