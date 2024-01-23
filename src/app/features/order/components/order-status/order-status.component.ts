import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent {
  constructor(private router: Router) {}

  handleback() {
    this.router.navigate(['orders'])
  }
}
