import { Component } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {

  showModal: boolean = false;
  categories = [{title: "recently viewed"},{title: "popular"}]


  categoryTitle: string = '';
  data: Restaurant[] = [];
  recentlyViewedData: Restaurant[] = [];
  popularData: Restaurant[] = [];
}
