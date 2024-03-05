import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AllOrdersComponent,
    OrderStatusComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ],
})
export class OrderModule { }
