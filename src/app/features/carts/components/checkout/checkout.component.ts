import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from '../../../../shared/models/cart.model';
import { switchMap } from 'rxjs';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _cartService: CartService
  ) {}

  cartItems: ICart[] = [];
  total: number = 0;
  quantity: number | undefined = 0;
  schedule: boolean = false;

  ngOnInit() {
    localStorage.setItem('schedule', JSON.stringify(this.schedule));
    this.cartItems = this._cartService.getItems();
    console.log(this.cartItems);
    this.subtotal(this.cartItems);
  }

  onPlusClick(cartId: string) {
    this.quantity = this._cartService.increaseQuantity(cartId);
  }

  onMinusClick(cartId: string) {
    this.quantity = this._cartService.decreaseQuantity(cartId);
  }

  handleCheckout() {
    this.router.navigate(['checkout']);
  }

  handleEditCart(cart: ICart) {
    this.router.navigate(['/edit-cart', cart?.cartId]);
  }

  handleCrossClick() {
    history.back();
  }

  subtotal(items: ICart[]): number {
    this.total = 0;
    for (let i = 0; i < items.length; i++) {
      this.total += items[i].price;
    }
    return this.total;
  }

  handleAddItems() {
    if (this.cartItems[0].resId) {
      this.router.navigate(['/restaurant', this.cartItems[0].resId]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
