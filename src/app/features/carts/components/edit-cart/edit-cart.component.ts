import { Component } from '@angular/core';
import { ICart, IIngredient } from '../../../../shared/models/cart.model';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { ItemService } from '../../../../services/item.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrl: './edit-cart.component.scss'
})
export class EditCartComponent {

  constructor(private route: ActivatedRoute, private _itemService: ItemService, private cartService: CartService, private router: Router) {}
  item: any;
  cartItem: any;
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
  ischeckedAdd: boolean[] = [];
  ischeckedNo: boolean[] = [];


  ngOnInit(): void {

    // this.getCartQuantity();

    this.route.params.pipe(
      switchMap((params) => {
        this.cartId = params['cartId'];
        return this.cartService.getData('cartItems')
      })
    ).subscribe((data) => {
      const cartItems = JSON.parse(data as string)

      this.cartItem = this.cartService.getItem(this.cartId, cartItems)
      this.itemId = this.cartItem._id;
      this.quantity = this.cartItem.quantity;
      this.add = this.cartItem.addon;
      this.no = this.cartItem.no

      // console.log(this.totalCost)
    })


    this._itemService.itemDetails(this.itemId).subscribe((data) => {
      this.item = data;

      this.price = data.price;
      // console.log(this.price)
      // this.totalCost = data.price;
      // this.singleCost = data.price;
      // this.resId = data.resId;
      this.itemName = data.name;
      this.image = data.image;
      this.description = data.description;


      // checkbox
      for (let i = 0; i < this.item.addon.length; i++) {
        let no = true;
        for (let j = 0; j < this.cartItem.addon.length; j++) {

          if (this.item.addon[i].name === this.cartItem.addon[j].name) {
            this.ischeckedAdd.push(true);
            no = false;
          }
        }
        if (no) {
          this.ischeckedAdd.push(false);
        }
      }


      for (let i = 0; i < this.item.no.length; i++) {
        let no = true;
        for (let j = 0; j < this.cartItem.no.length; j++) {

          if (this.item.no[i].name === this.cartItem.no[j].name) {
            this.ischeckedNo.push(true);
            no = false;
          }
        }
        if (no) {
          this.ischeckedNo.push(false);
        }
      }

      // totalCost
      this.singleCost += this.price;
      for (let i = 0; i < this.item.addon.length; i++) {
        if (this.ischeckedAdd[i] === false) continue;
        this.singleCost += this.item.addon[i].price;
      }
      this.totalCost = (this.singleCost * this.quantity);


    });
  }




  onUpdateCartClick () {
    // this.cartId = Math.floor(100000 + Math.random() * 900000).toString();
    this.cartService.updateCart(this.itemId, this.resId, this.cartId, this.itemName, this.image, this.description, this.quantity, this.totalCost, this.add, this.no);
  }
// checking if an item is in the cart - incomplete
  getCartQuantity () {
    this.route.params.pipe(
      switchMap((params) => {
        this.itemId = params['itemId'];
        const item = this.cartService.getItemQuantity(this.itemId);
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
      this.totalCost += ing.price;
      this.add.push(
        {
          name: ing.name,
          price: ing.price,
          _id: ing._id,
        }
      );
    }
    else{
      this.totalCost -= ing.price;
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

  handleCartClick() {
    this.router.navigate(['cart']);
  }

}
