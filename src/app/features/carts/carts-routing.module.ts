import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

const routes: Routes = [
  {
    path: 'add-to-cart',
    component: AddToCartComponent
  },
  {
    path: 'cart',
    component: CheckoutComponent
  },
  {
    path: 'checkout',
    component: PlaceOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
