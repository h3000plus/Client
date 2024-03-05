import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'order-status/:id',
    component: OrderStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
