import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-filter',
  templateUrl: './fee-filter.component.html',
  styleUrl: './fee-filter.component.scss'
})
export class FeeFilterComponent {

  constructor(private router: Router) {}

  handleApply() {

  }

  reset() {
    this.router.navigate(['delivery'])
  }
}
