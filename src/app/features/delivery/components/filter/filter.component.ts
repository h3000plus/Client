import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  constructor() {}

  
    // price
    @Input() priceDisplay : boolean | undefined

    @Output()  priceDisplayChange = new EventEmitter<boolean>()

    handlePriceClick() {

      console.log('before',this.priceDisplay)
      this.priceDisplay = true
      this.priceDisplayChange.emit(this.priceDisplay)
    
    }

    // fee
    @Input() feeDisplay : boolean | undefined

    @Output()  feeDisplayChange = new EventEmitter<boolean>()

    handleFeeClick() {

      console.log('before',this.feeDisplay)
      this.feeDisplay = true
      this.feeDisplayChange.emit(this.feeDisplay)
    
    }
    

    // like
    @Input() likeDisplay : boolean | undefined

    @Output()  likeDisplayChange = new EventEmitter<boolean>()

    handleLikeClick() {

      console.log('before',this.likeDisplay)
      this.likeDisplay = true
      this.likeDisplayChange.emit(this.likeDisplay)
    
    }
}
