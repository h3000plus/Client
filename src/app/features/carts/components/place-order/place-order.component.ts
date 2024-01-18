import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { ICart } from '../../../../shared/models/cart.model';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent {
  constructor(private router: Router, private cartService: CartService) {}

  carts: ICart[] = [];
  totalCost: number = 0;

  ngOnInit () {
    this.carts = this.cartService.getItems();
    for (let i = 0; i < this.carts.length; i++) {
      this.totalCost += this.carts[i].price;
    }
  }
  handlePlaceOrder(){
    alert("Your order is placed now.");
    this.router.navigate(['orders']);
  }

  handleback(){
    this.router.navigate(['cart']);
  }
}
