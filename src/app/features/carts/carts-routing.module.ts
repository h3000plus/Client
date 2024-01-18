import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { EditCartComponent } from './components/edit-cart/edit-cart.component';

const routes: Routes = [
  {
    path: 'item/:itemId',
    component: AddToCartComponent
  },
  {
    path: 'cart',
    component: CheckoutComponent
  },
  {
    path: 'checkout',
    component: PlaceOrderComponent
  },
  {
    path: 'edit-cart/:cartId',
    component: EditCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
