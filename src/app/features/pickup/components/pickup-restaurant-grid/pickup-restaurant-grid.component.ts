import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-pickup-restaurant-grid',
  templateUrl: './pickup-restaurant-grid.component.html',
  styleUrl: './pickup-restaurant-grid.component.scss'
})
export class PickupRestaurantGridComponent {
  constructor( private router: Router) {}

  restaurants: Restaurant[] = [
    {
      _id: '1',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg'
    },
    {
      _id: '2',
      name: 'Casa comfort',
      image: '/assets/icons/restaurant.jpeg'
    },
    {
      _id: '3',
      name: 'Asado Favorito',
      image: '/assets/icons/restaurant.jpeg'
    },
    {
      _id: '4',
      name: 'Casa Paco',
      image: '/assets/icons/restaurant.jpeg'
    },
    {
      _id: '5',
      name: 'Las Tapas',
      image: '/assets/icons/restaurant.jpeg'
    },
    {
      _id: '6',
      name: 'Chic Churro',
      image: '/assets/icons/restaurant.jpeg'
    },
    {
      _id: '7',
      name: 'Dummy Restaurant 7',
      image: '/assets/icons/restaurant.jpeg'
    }
  ];
  isLoading: boolean = false;

  handleProductClick(restaurant: Restaurant) {
    this.router.navigate(['/restaurant', restaurant?._id]);
  }
}
