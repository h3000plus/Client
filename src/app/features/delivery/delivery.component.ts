import { Component } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {

  constructor(private router: Router) {}

  showModal: boolean = false;
  categories = [{title: "recently viewed"}, {title: "recommended for you"}, {title: "popular"}, {title: "top 10"}]


  categoryTitle: string = '';
  data: Restaurant[] = [];
  recentlyViewedData: Restaurant[] = [];
  popularData: Restaurant[] = [];

  handleSearchClick() {
    this.router.navigate(['delivery/search']);
  }
}
