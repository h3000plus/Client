import { Component } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.scss'
})
export class Top10Component {
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
}
