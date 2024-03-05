import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  completedOrders: any = []
  processingOrders: any = []
  monthNames: any = {'01':"January", '02':"February", '03':"March", '04':"April", '05':"May", '06':"June", '07':"July", '08':"August", '09':"September", '10':"October", '11':"November", '12':"December"};

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.orderService.getCompletedOrders().subscribe((data) => {
      
      this.completedOrders = data
      // console.log(this.completedOrders)
    })

    this.orderService.getProcessingOrders().subscribe((data) => {
      
      this.processingOrders = data
      console.log(this.processingOrders)
    })


    
  }

  orderStatus(id: string) {
      this.router.navigate(['order-status', id])
  }

}
