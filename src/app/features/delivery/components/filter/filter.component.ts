import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  constructor() {}

    // color
    @Input() filters: any;

  
    // price
    @Input() priceDisplay : boolean | undefined

    @Output()  priceDisplayChange = new EventEmitter<boolean>()

    handlePriceClick() {
      this.priceDisplay = true
      this.priceDisplayChange.emit(this.priceDisplay)
    
    }

    // fee
    @Input() feeDisplay : boolean | undefined

    @Output()  feeDisplayChange = new EventEmitter<boolean>()

    handleFeeClick() {
      this.feeDisplay = true
      this.feeDisplayChange.emit(this.feeDisplay)
    }
    

    // like
    @Input() likeDisplay : boolean | undefined

    @Output()  likeDisplayChange = new EventEmitter<boolean>()

    handleLikeClick() {
      this.likeDisplay = true
      this.likeDisplayChange.emit(this.likeDisplay)
    
    }
}
