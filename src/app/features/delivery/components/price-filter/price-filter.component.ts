import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss'
})
export class PriceFilterComponent {

  constructor(private router: Router) {}

  handleApply() {

  }

  reset() {
    this.router.navigate(['delivery'])
  }
}
