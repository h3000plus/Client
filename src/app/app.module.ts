import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './features/customer/customer.module';
import { DeliveryModule } from './features/delivery/delivery.module';
import { RestaurantModule } from './features/restaurant/restaurant.module';
import { PickupModule } from './features/pickup/pickup.module';
import { BrowseModule } from './features/browse/browse.module';
import { CartsModule } from './features/carts/carts.module';
import { OrderModule } from './features/order/order.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    DeliveryModule,
    PickupModule,
    RestaurantModule,
    BrowseModule,
    CartsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
