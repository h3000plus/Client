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
import { HttpClientModule } from '@angular/common/http';
import { DeliveryService } from './services/delivery.service';
import { HomeModule } from './features/home/home.module';
import { ReservationModule } from './features/reservation/reservation.module';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CustomerModule,
    DeliveryModule,
    PickupModule,
    ReservationModule,
    RestaurantModule,
    BrowseModule,
    CartsModule,
    OrderModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
