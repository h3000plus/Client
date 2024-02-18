import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-category-restaurant-grid',
  templateUrl: './category-restaurant-grid.component.html',
  styleUrl: './category-restaurant-grid.component.scss',
})
export class CategoryRestaurantGridComponent {
  constructor(
    private router: Router,
    private _deliveryService: DeliveryService
  ) {}

  // restaurants: any = []
  @Input()
  restaurants: any = [];

  isLoading: boolean = false;

  ngOnInit() {}
  handleRestaurantClick(restaurant: any) {
    console.log(this.restaurants);
    this.router.navigate(['/restaurant/1']);
  }

  // restaurantDetails () {

  // }
}
