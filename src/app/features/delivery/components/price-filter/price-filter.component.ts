import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss'
})
export class PriceFilterComponent {

  constructor(private router: Router) {}

  selectedPrice: string = "";

  handleSelected(event: any) {
    this.selectedPrice = event.target.value;
  }


  // price
  @Input() priceDisplay: boolean | undefined;
  @Output()  priceDisplayChange = new EventEmitter<boolean>()


  @Input() filters: any;
  @Output()  filtersChange = new EventEmitter<any>()

  handlePriceApply() {

    // console.log('before', this.filters)
    this.filters.price = this.selectedPrice;
    this.filtersChange.emit(this.filters)

    this.priceDisplay = false;
    this.priceDisplayChange.emit(this.priceDisplay)
  }



  reset() {
    this.filters.price = "";
    this.filtersChange.emit(this.filters)

    this.priceDisplay = false;
    this.priceDisplayChange.emit(this.priceDisplay);
  }
}
