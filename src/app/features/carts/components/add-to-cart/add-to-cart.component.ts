import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
  options: Category[] = [
    {
      name:"Salt",
      image: "1"
    },
    {
      name: "Onion",
      image: "2"
    },
    {
      name: "Spicy",
      image: "3"
    },
  ]
  options2: Category[] = [
    {
      name:"Salt",
      image: "4"
    },
    {
      name: "Onion",
      image: "5"
    },
    {
      name: "Spicy",
      image: "6"
    },
  ]
}
