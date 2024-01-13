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
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "1",
      delivery: true,
      pickup: true
    },
    {
      _id: '2',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "2",
      delivery: true,
      pickup: true
    },
    {
      _id: '3',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "3",
      delivery: true,
      pickup: true
    },
    {
      _id: '4',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "4",
      delivery: true,
      pickup: true
    },
    {
      _id: '5',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "5",
      delivery: true,
      pickup: true
    },
    {
      _id: '6',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "6",
      delivery: true,
      pickup: true
    },
    {
      _id: '7',
      name: 'Barano NYC',
      image: '/assets/icons/restaurant.jpeg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "7",
      delivery: true,
      pickup: true
    },
  ];
  isLoading: boolean = false;

  handleProductClick(restaurant: Restaurant) {
    this.router.navigate(['/restaurant', restaurant?._id]);
  }
}
