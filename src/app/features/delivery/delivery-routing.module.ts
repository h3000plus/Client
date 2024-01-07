import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';

const routes: Routes = [
  {
    path: 'delivery',
    component: DeliveryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
