import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { RestaurantsByCategoryComponent } from './components/restaurants-by-category/restaurants-by-category.component';
import { BrowseComponent } from './browse.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    AllCategoriesComponent,
    RestaurantsByCategoryComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule,
    SearchModule
  ]
})
export class BrowseModule { }
