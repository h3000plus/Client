import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { Router } from '@angular/router';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-restaurants-by-category',
  templateUrl: './restaurants-by-category.component.html',
  styleUrl: './restaurants-by-category.component.scss'
})
export class RestaurantsByCategoryComponent {
  constructor(private router: Router, private deliveryService: DeliveryService) {}
  recommendedRestaurants: any;

  ngOnInit() {
    this.deliveryService.recommendedRestaurants().subscribe((data) => {
      this.recommendedRestaurants = data;
    })
    
  }

  popularRestaurants: Restaurant[] = [
    {
      _id: '1',
      name: 'KFC',
      image: 'https://i.ibb.co/zmNKB67/KFC.jpg',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "1",
      delivery: true,
      pickup: true
    },
    {
      _id: '2',
      name: 'Mc Donalds',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      deliveryFee: 50,
      deliveryTime: 100,
      like: "4.1k",
      category_id: "2",
      delivery: true,
      pickup: true
    },
    {
      _id: '3',
      name: 'KFC',
      image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
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
  @Input() category!: {title: string};

  route:String = "";

  handleClickfilter(title: string){
    this.route = "delivery/" + title.split(' ')[0];
    this.router.navigate([this.route]);
  }

  handleClick(id: string) {
    this.router.navigate(['restaurant', id]);
  }
}
