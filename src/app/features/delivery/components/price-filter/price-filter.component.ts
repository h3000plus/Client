import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss'
})
export class PriceFilterComponent {

  constructor(private router: Router, private deliveryService: DeliveryService) {}

  selectedPrice: string = "";

  handleSelected(event: any) {
    this.selectedPrice = event.target.value;
  }


  // price
  @Input() priceDisplay: boolean | undefined;
  @Output()  priceDisplayChange = new EventEmitter<boolean>()

  @Input() searchStatus: boolean | undefined;
  @Output() searchStatusChange = new EventEmitter<boolean>()

  @Input() filters: any;
  @Output()  filtersChange = new EventEmitter<any>()


  @Input()
  restaurants: any = [];


  @Output() restaurantsChange = new EventEmitter<any>()

  handlePriceApply() {

    // console.log('before', this.filters)

    this.priceDisplay = false;
    this.priceDisplayChange.emit(this.priceDisplay)

    this.searchStatus = true;
    this.searchStatusChange.emit(this.searchStatus);

    this.filters.price = this.selectedPrice;

    const mode = this.filters.mode;
    const searchTerm = this.filters.searchTerm;
    const cuisine = this.filters.cuisine;
    const price = this.filters.price;
    
    this.deliveryService.filteredRestaurants({ mode, searchTerm, cuisine, price }).subscribe((data) => {
      this.restaurants = data
      this.restaurantsChange.emit(this.restaurants)
    })
  }



  reset() {
    this.filters.price = "";
    this.filtersChange.emit(this.filters)

    this.priceDisplay = false;
    this.priceDisplayChange.emit(this.priceDisplay);

    this.searchStatus = false;
    this.searchStatusChange.emit(this.searchStatus);
  }
}
