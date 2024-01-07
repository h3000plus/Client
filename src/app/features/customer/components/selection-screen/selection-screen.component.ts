import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrl: './selection-screen.component.scss'
})
export class SelectionScreenComponent {
  constructor(private router: Router) {}
  /**
   * Navigates to the customer login page.
   */
  onLoginClick() {
    this.router.navigate(['/customer/login']);``
  }

  /**
   * Navigates to the customer registration page.
   */
  onRegisterClick() {
    this.router.navigate(['/customer/register']);
  }
}
