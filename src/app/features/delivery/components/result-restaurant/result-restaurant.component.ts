import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-restaurant',
  templateUrl: './result-restaurant.component.html',
  styleUrl: './result-restaurant.component.scss'
})
export class ResultRestaurantComponent {
  constructor(private router: Router) {}

  @Input()
   restaurants : any = [];

   handleRestaurantClick(restaurant: any) {
    this.router.navigate(['/restaurant', restaurant?._id]);
  }
}
