import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  constructor(private router: Router) {}

  handlePriceClick() {
    this.router.navigate(['p']);
  }

  handleFeeClick() {
    this.router.navigate(['f']);
  }

  handleLikeClick() {
    this.router.navigate(['l']);
  }
}
