import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './features/customer/customer.module';
import { DeliveryModule } from './features/delivery/delivery.module';
import { RestaurantModule } from './features/restaurant/restaurant.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    DeliveryModule,
    RestaurantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
