import { Component } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-restaurants-by-category',
  templateUrl: './restaurants-by-category.component.html',
  styleUrl: './restaurants-by-category.component.scss'
})
export class RestaurantsByCategoryComponent {
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

  handleCategoryIconClick(){

  }
}
