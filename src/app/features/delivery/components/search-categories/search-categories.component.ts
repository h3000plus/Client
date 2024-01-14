import { Component } from '@angular/core';
import { DeliveryService } from '../../../../services/delivery.service';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss'
})
export class SearchCategoriesComponent {

  constructor(private _deliveryService: DeliveryService,private http:HttpClient) {}

  restaurants: Restaurant[] = [];

  searchRestaurant(query: KeyboardEvent){
    if (query) {
      const element = query.target as HTMLInputElement;
      if (element.value.length > 0) {
        this._deliveryService.searchRestaurant(element.value).subscribe(
          (data) => {
            this.restaurants = data
          }
        )
      }
    }
  //  console.log(this._deliveryService)
  //  this.http.get(`http://localhost:3000/restaurants/delivery/search?searchTerm=${searchTerm}`).subscribe( data => this.restaurants = data)
  }
}
