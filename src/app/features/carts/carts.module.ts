import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { EditCartComponent } from './components/edit-cart/edit-cart.component';


@NgModule({
  declarations: [
    AddToCartComponent,
    CheckoutComponent,
    PlaceOrderComponent,
    EditCartComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
  ]
})
export class CartsModule { }
