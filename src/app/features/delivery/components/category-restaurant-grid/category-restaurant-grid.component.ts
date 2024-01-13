import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-category-restaurant-grid',
  templateUrl: './category-restaurant-grid.component.html',
  styleUrl: './category-restaurant-grid.component.scss'
})
export class CategoryRestaurantGridComponent {

  constructor( private router: Router, private _deliveryService: DeliveryService) {}

  restaurants: Restaurant[] = []
  ngOnInit(){
    this._deliveryService.deliveryRestaurants().subscribe( data => this.restaurants = data)
  }

  isLoading: boolean = false;

  handleProductClick(restaurant: Restaurant) {
    this.router.navigate(['/restaurant', restaurant?._id]);
  }

}
