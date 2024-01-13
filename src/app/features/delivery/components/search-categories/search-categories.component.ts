import { Component } from '@angular/core';
import { DeliveryService } from '../../../../services/delivery.service';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss'
})
export class SearchCategoriesComponent {

  constructor(private _deliveryService: DeliveryService) {}

  restaurants: Restaurant[] = [];

  searchRestaurant(searchTerm: string){
    console.log(searchTerm)
    this._deliveryService.searchRestaurant(searchTerm).subscribe( data => this.restaurants = data)
  }
}
