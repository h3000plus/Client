import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {
  constructor(
    private router: Router,
    private _deliveryService: DeliveryService
  ) {}

  // restaurants: any = []
  @Input()
  restaurants: any = [];

  @Input() offer: boolean | undefined;
  @Output()  offerChange = new EventEmitter<boolean>()

  isLoading: boolean = false;

  ngOnInit() {}
  handleRestaurantClick(restaurant: any) {
    console.log(this.restaurants);
    this.router.navigate([`/restaurant/${restaurant.resId}`]);
  }

  toggleOfferPage(){
    this.offer = false;
    this.offerChange.emit(this.offer);
  }
}
