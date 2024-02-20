import { Component } from '@angular/core';
import { DeliveryService } from '../../../../services/delivery.service';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss',
})
export class SearchCategoriesComponent {
  constructor(
    private _deliveryService: DeliveryService,
    private http: HttpClient,
    private router: Router
  ) {}

  restaurants: any = [];

  searchRestaurant(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      const mode = 'delivery';
      const cuisine = '';
      const price = '';
      if (element.value.length > 0) {
        this._deliveryService
          .filteredRestaurants({ mode, searchTerm: element.value, cuisine, price })
          .subscribe((data) => {
            this.restaurants = data;
          });
      }
      if (element.value.length === 0) {
        this.restaurants = [];
      }
    }
    //  console.log(this._deliveryService)
    //  this.http.get(`${this.baseURL}/restaurants/delivery/search?searchTerm=${searchTerm}`).subscribe( data => this.restaurants = data)
  }

  handleResClick(restaurant: Restaurant) {
    this.router.navigate(['/restaurant', restaurant?._id]);
  }

  handleLeftClick() {
    this.router.navigate(['delivery']);
  }
}
