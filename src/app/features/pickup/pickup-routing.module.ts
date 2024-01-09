import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickupComponent } from './pickup.component';
import { SearchCategoriesComponent } from './components/search-categories/search-categories.component';

const routes: Routes = [
  {
    path: 'pickup',
    component: PickupComponent,
  },
  {
    path: 'pickup',
    children: [
      {
        path: 'search',
        component: SearchCategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickupRoutingModule { }
