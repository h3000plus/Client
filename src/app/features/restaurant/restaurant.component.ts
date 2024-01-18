import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {

  constructor(private router: Router) {}
  categories = [{title: "Pizza"}, {title: "Pasta"}, {title: "Dessert"}, {title: "Chicken"}, {title: "Sandwich"}, {title: "Soup"}, {title: "Dessert"}, {title: "Dessert"}]

  handleCartClick() {
    this.router.navigate(['/cart']);
  }

}
