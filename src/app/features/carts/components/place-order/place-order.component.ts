import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent {
  constructor(private router: Router) {}
  handlePlaceOrder(){
    alert("Your order is placed now.");
    this.router.navigate(['orders']);
  }

  handleback(){
    this.router.navigate(['cart']);
  }
}
