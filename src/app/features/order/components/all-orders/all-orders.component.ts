import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  completedOrders: any = []
  processingOrders: any = []

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getCompletedOrders().subscribe((data) => {
      
      this.completedOrders = data
      // console.log(this.completedOrders)
    })

    this.orderService.getProcessingOrders().subscribe((data) => {
      
      this.processingOrders = data
      // console.log(this.processingOrders)
    })
    
  }

}
