import { Injectable } from '@angular/core';
import { ICart, IIngredient } from '../shared/models/cart.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'cartItems';
  items: ICart[] = [];

  // get storage solution
  private dataSubject = new BehaviorSubject<string | null>(null);

  getData(cartItems: string): BehaviorSubject<string | null> {
    const storedData = localStorage.getItem(cartItems);

    this.dataSubject.next(storedData);
    console.log(this.dataSubject)
    return this.dataSubject;
  }

  constructor(private http: HttpClient) {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  /**
   * Save the shopping cart to local storage.
   */
  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  /**
   * Add a product to the shopping cart.
   * @param product The product to be added.
   * @param quantity The quantity of the product.
   * @param days The number of days.
   * @param times The number of times.
   */
  addToCart(
    _id: string,
    resId: string,
    cartId: string,
    name: string,
    image: string,
    description: string,
    quantity: number,
    price: number,
    addon: IIngredient[],
    no: IIngredient[]
  ): void {
    const existingItem = this.items.find((item) => item.cartId === cartId);
    
    if (existingItem) {
      existingItem.quantity = quantity;
      existingItem.price = price;
    } else {
      this.items.push({
        _id: _id,
        resId: resId,
        cartId: cartId,
        name: name,
        image: image,
        description: description,
        quantity: quantity,
        price: price,
        addon: addon,
        no: no
      });
      
    }

    this.saveToLocalStorage();
  }

  /**
   * Update the quantity of a product in the cart.
   * @param productId The ID of the product to update.
   * @param newQuantity The new quantity for the product.
   */

  updateCart(
    _id: string,
    resId: string,
    cartId: string,
    name: string,
    image: string,
    description: string,
    quantity: number,
    price: number,
    addon: IIngredient[],
    no: IIngredient[]
  ): void {
    const existingItemIndex = this.items.findIndex((item) => item.cartId === cartId);

    if (existingItemIndex !== -1) {
      this.items[existingItemIndex] = {
        _id: _id,
        resId: resId,
        cartId: cartId,
        name: name,
        image: image,
        description: description,
        quantity: quantity,
        price: price,
        addon: addon,
        no: no
      };
    }

    this.saveToLocalStorage();
  }
  // updateCartItemQuantity(productId: string, newQuantity: number): void {
  //   const item = this.items.find((item) => item._id === productId);

  //   if (item) {
  //     item.quantity = newQuantity;
  //     item.totalAmount = newQuantity * item.price;

  //     if (item.quantity <= 0) {
  //       this.removeFromCart(productId);
  //     }

  //     this.saveToLocalStorage();
  //   }
  // }

  // /**
  //  * Increase the quantity of a product in the cart.
  //  * @param productId The ID of the product to update.
  //  */
  increaseQuantity(cartId: string): number | undefined {
    const item = this.items.find((item) => item.cartId === cartId);
    console.log(item)
    if (item) {
      console.log(item)
      item.price = item.price + (item.price / item.quantity);
      item.quantity += 1;

      this.saveToLocalStorage();
    }
    return item?.quantity;
  }

  // /**
  //  * Decrease the quantity of a product in the cart.
  //  * @param productId The ID of the product to update.
  //  */
  // decreaseQuantity(productId: string): void {
  //   const item = this.items.find((item) => item._id === productId);

  //   if (item) {
  //     item.quantity -= 1;
  //     item.totalAmount = item.quantity * item.price;

  //     if (item.quantity <= 0) {
  //       this.removeFromCart(productId);
  //     }

  //     this.saveToLocalStorage();
  //   }
  // }

  decreaseQuantity(cartId: string): number | undefined {
    const item = this.items.find((item) => item.cartId === cartId);
    if (item) {
      item.price = item.price - (item.price / item.quantity);
      item.quantity -= 1;
      if (item.quantity < 1) {
        this.removeFromCart(cartId);
      }
      this.saveToLocalStorage();
    }
    return item?.quantity;
  }

  /**
   * Get the items in the shopping cart.
   * @returns The items in the shopping cart.
   */
  getItemQuantity(cartId: string): any {
    const item = this.items.find((item) => item.cartId === cartId);
    return item?.quantity
  }

  getItems(): ICart[] {
    return this.items;
  }



  getItem(cartId: string, cartItems: ICart[]): any {

    const item = cartItems.find((item) => item.cartId === cartId);

    return item;
  }

  // /**
  //  * Get the total number of items in the shopping cart.
  //  * @returns The total number of items.
  //  */
  // getCartTotal(): number {
  //   let total = 0;
  //   for (const item of this.items) {
  //     total += item.totalAmount;
  //   }
  //   return total;
  // }

  // /**
  //  * Clear the shopping cart.
  //  */

  // clearCart(): void {
  //   this.items = [];
  //   this.saveToLocalStorage();
  // }

  // /**
  //  * Remove a product from the shopping cart.
  //  * @param productId The ID of the product to be removed.
  //  */
  removeFromCart(cartId: string): void {
    const index = this.items.findIndex((item) => item.cartId === cartId);

    if (index !== -1) {
      this.items.splice(index, 1);
      // this.saveToLocalStorage();
    }
  }

  removeAllFromCart() : void {
    this.items = [];
    this.saveToLocalStorage();
  }
}
