import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../../../../services/delivery.service';
import { switchMap } from 'rxjs';
import { ItemService } from '../../../../services/item.service';
import { FormsModule } from '@angular/forms';
import { ICart, IIngredient } from '../../../../shared/models/cart.model';
import { CartService } from '../../../../services/cart.service';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { IItem } from '../../../../shared/models/item.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  constructor(private route: ActivatedRoute, private _cartService: CartService, private _itemService: ItemService, private router: Router) {}
  item: any;
  itemId: string = "";
  cartId: string = "";
  totalCost: number = 0;
  singleCost: number = 0;
  quantity: number = 1;
  last: number = 0;
  trackCost: number[] = [];
  add: IIngredient[] = [];
  no: IIngredient[] = [];
  carts: ICart[] = [];
  resId: string = "";
  itemName: string = "";
  image: string = "";
  description: string = "";
  check: any;
  price: number = 0;




  ngOnInit(): void {
    // this.getCartQuantity();
    this.route.params.pipe(
      switchMap((params) => {
        this.itemId = params['itemId'];
        return this._itemService.itemDetails(this.itemId);
      })
    ).subscribe((data) => {
      this.item = data;
      this.price = data.price;
      this.totalCost = data.price;
      this.singleCost = data.price;
      this.resId = data.resId;
      this.itemName = data.name;
      this.image = data.image;
      this.description = data.description;
    });


  }

  onAddToCartClick () {
    this.cartId = Math.floor(100000 + Math.random() * 900000).toString();
    this._cartService.addToCart(this.itemId, this.resId, this.cartId, this.itemName, this.image, this.description, this.quantity, this.totalCost, this.add, this.no);
  }
// checking if an item is in the cart - incomplete
  getCartQuantity () {
    this.route.params.pipe(
      switchMap((params) => {
        this.itemId = params['itemId'];
        const item = this._cartService.getItemQuantity(this.itemId);
        if (item) this.quantity = item;
        return item;
      })
    ).subscribe(
      // (data) => {
      //   this.check = data;
      //   console.log(this.check)
      // }
    )

  }

  addIngredient(event: any, ing: any) {
    if (event.target.checked) {
      this.totalCost += (ing.price * this.quantity);
      this.add.push(
        {
          name: ing.name,
          price: ing.price,
          _id: ing._id,
        }
      );
    }
    else{
      this.totalCost -= (ing.price * this.quantity);
      const objectToRemove = {
        name: ing.name,
        price: ing.price,
        _id: ing._id,
      };
      const indexToRemove = this.add.findIndex(item => (
        item.name === objectToRemove.name &&
        item.price === objectToRemove.price &&
        item._id === objectToRemove._id
      ));
      this.add.splice(indexToRemove, 1);
    }
  }

  removeIngredient(event: any, ing: any) {
    if (event.target.checked) {
      this.no.push({
        name: ing.name,
        price: ing.price,
        _id: ing._id
      });
    }
    else{
      const objectToRemove = {
        name: ing.name,
        price: ing.price,
        _id: ing._id,
      };
      const indexToRemove = this.no.findIndex(item => (
        item.name === objectToRemove.name &&
        item.price === objectToRemove.price &&
        item._id === objectToRemove._id
      ));
      this.no.splice(indexToRemove, 1);
    }
  }

  onClickPlus() {
    this.quantity++;
    this.singleCost = this.price;
    for (let i = 0; i < this.add.length; i++) {
      this.singleCost += this.add[i].price;
    }
    this.totalCost = (this.singleCost * this.quantity);
  }

  onClickMinus() {
    if(this.quantity > 1) this.quantity--;

    this.singleCost = this.price;
    for (let i = 0; i < this.add.length; i++) {
      this.singleCost += this.add[i].price;
    }
    this.totalCost = (this.singleCost * this.quantity);
  }

  handleCartClick(item: IItem){
    this.router.navigate(['/restaurant', item?.resId]);
  }

  handleLeftClick(resId: string) {
    this.router.navigate(['/restaurant', resId]);
  }
}
