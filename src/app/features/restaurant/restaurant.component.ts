import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {
  categories = [{title: "Pizza"}, {title: "Pasta"}, {title: "Dessert"}, {title: "Chicken"}, {title: "Sandwich"}, {title: "Soup"}, {title: "Dessert"}, {title: "Dessert"}]

}