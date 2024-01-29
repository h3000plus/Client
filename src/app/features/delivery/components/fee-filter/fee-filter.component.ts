import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-filter',
  templateUrl: './fee-filter.component.html',
  styleUrl: './fee-filter.component.scss'
})
export class FeeFilterComponent {

  constructor(private router: Router) {}

  selectedFee: string = "";

  handleSelected(event: any) {
    this.selectedFee = event.target.value;
  }

  // Delivery Fee
  @Input() feeDisplay: boolean | undefined;
  @Output()  feeDisplayChange = new EventEmitter<boolean>()

  @Input() filters: any;
  @Output()  filtersChange = new EventEmitter<any>()

  handleFeeApply() {
    // console.log('before', this.filters)
    this.filters.deliveryFee = this.selectedFee;
    this.filtersChange.emit(this.filters)

    this.feeDisplay = false;
    this.feeDisplayChange.emit(this.feeDisplay);
  }

  reset() {
    this.filters.deliveryFee = '';
    this.filtersChange.emit(this.filters)

    this.feeDisplay = false;
    this.feeDisplayChange.emit(this.feeDisplay);
  }
}
