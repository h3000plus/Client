import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  constructor(private router: Router) {}

  // @Input()
    // handlePriceClick !: (() => void);

    @Input() priceDisplay : boolean | undefined

    @Output()  priceDisplayChange = new EventEmitter<boolean>()

  // @ViewChild()
    handlePriceClick() {

      console.log('before',this.priceDisplay)
      this.priceDisplay = true
      this.priceDisplayChange.emit(this.priceDisplay)
      // this.priceDisplay = true
      // console.log(this.priceDisplay)
      // this.router.navigate(['p']);
    }

  handleFeeClick() {
    this.router.navigate(['f']);
  }

  handleLikeClick() {
    this.router.navigate(['l']);
  }
}
