import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { ICart } from '../../../../shared/models/cart.model';
import { OrderService } from '../../../../services/order.service';
import { IOrder } from '../../../../shared/models/order.model';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent {
  constructor(private router: Router, private cartService: CartService, private orderService: OrderService) {}

  carts: ICart[] = [];
  totalCost: number = 0;
  dFee: number = 0;

  // border-color
  pickup: boolean = !JSON.parse(localStorage.getItem('mode') as any);
  standard: boolean = JSON.parse(localStorage.getItem('mode') as any);
  schedule: boolean = JSON.parse(localStorage.getItem('schedule') as any);

  ngOnInit () {
    this.carts = this.cartService.getItems();
    for (let i = 0; i < this.carts.length; i++) {
      this.totalCost += this.carts[i].price;
    }
  }
  handlePlaceOrder(){
    const order: IOrder = {

      cartItems: this.carts,
      subtotal: this.totalCost,
      ordertype: "marketplace",
      delivery: false,
      pickup: false
    }

    if (this.pickup && !this.schedule) {
      order.deliveryFee = 0;
      order.deliveryTime = 0;
      order.delivery = false;
      order.pickup = true;

      this.orderService.createOrder(order).subscribe(
        (data) => {
          this.router.navigate(['orders']);
          console.log("pickup")
        }
      )
    }
    else if (this.standard && !this.schedule) {
      order.delivery = true;
      order.pickup = false;
      this.orderService.createOrder(order).subscribe(
        (data) => {
          this.router.navigate(['orders']);
          console.log("delivery")
        }
      )
    }
    else if (this.schedule) {
      const sche = JSON.parse(localStorage.getItem('schedule') as any)
      order.delivery = sche.cMode;
      order.pickup = !sche.cMode;
      order.deliveryTime = (!sche.cMode) ? 0 : 30;
      order.date = sche.date;
      order.schedule = sche.schedule

      this.orderService.createScheduleOrder(order).subscribe(
        (data) => {
          this.router.navigate(['orders']);
          console.log("schedule")
        }
      )
    }


    // alert("Your order is placed now.");

  }

  handleback() {
    this.router.navigate(['cart']);
  }

  handlePickup() {
    this.dFee = 0;
    this.pickup = true;
    this.standard = this.schedule = false;
    localStorage.setItem('schedule', JSON.stringify(this.schedule));
  }

  handleStandard() {
    this.dFee = 5;
    this.standard = true;
    this.pickup = this.schedule = false;
    localStorage.setItem('schedule', JSON.stringify(this.schedule));
  }

  handleSchedule() {
    this.schedule = true;
    localStorage.setItem('schedule', JSON.stringify(this.schedule));
    this.standard = this.pickup = false;
    this.router.navigate(['schedule'])
  }
}
