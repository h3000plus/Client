import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen/welcome-screen.component';
import { RouterModule } from '@angular/router';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { RestaurantsListComponent } from './components/restaurants/restaurants-list.component';
import { RestaurantsGridComponent } from './components/restaurants-grid/restaurants-grid.component';




@NgModule({
  declarations: [
    WelcomeScreenComponent,
    BottomMenuComponent,
    RestaurantsListComponent,
    RestaurantsGridComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeScreenComponent,
    BottomMenuComponent,
    RestaurantsListComponent
  ]
})
export class SharedModule { }
