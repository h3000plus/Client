import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DeliveryService } from '../../../../services/delivery.service';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrl: './restaurant-info.component.scss',
})
export class RestaurantInfoComponent {
  constructor(
    private route: ActivatedRoute,
    private _deliveryService: DeliveryService,
    private router: Router
  ) {}

  mode: boolean = JSON.parse(localStorage.getItem('mode') as any);

  restaurant: any;
  restaurantId: string = '';
  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.restaurantId = params['_id'];
          return this._deliveryService.restaurantDetails(this.restaurantId);
        })
      )
      .subscribe((data) => {
        this.restaurant = data;
      });
  }

  handleBackClick() {
    this.router.navigate(['delivery']);
  }

  handleSearchClick(restaurant: Restaurant) {
    this.router.navigate(['/restaurant/search', restaurant?._id]);
  }

  deliveryMode() {
    this.mode = true;
    localStorage.setItem('mode', JSON.stringify(this.mode));
  }

  pickupMode() {
    this.mode = false;
    localStorage.setItem('mode', JSON.stringify(this.mode));
  }
}
