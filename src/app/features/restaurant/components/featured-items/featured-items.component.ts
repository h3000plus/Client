import { Component } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrl: './featured-items.component.scss'
})
export class FeaturedItemsComponent {
  restaurants: Restaurant[] = [
    {
      _id: '1',
      name: 'Pizza',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '2',
      name: 'Burger',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '3',
      name: 'Sandwitch',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '4',
      name: 'Chicken-Fry',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '5',
      name: 'Chicken-Fry',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '6',
      name: 'Chicken-Fry',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    },
    {
      _id: '7',
      name: 'Chicken-Fry',
      image: 'https://res.cloudinary.com/dsuiwxwkg/image/upload/v1704603911/burger_ctlbzl.png'
    }
  ];
}
