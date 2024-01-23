import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  constructor(private router: Router) {}


  handleProfileClick() {
    this.router.navigate(['profile']);
  }

  handleFavoriteClick() {
    this.router.navigate(['favorite']);
  }

  handleLoyaltyClick() {
    this.router.navigate(['loyalty-program']);
  }

  handleWalletClick() {
    this.router.navigate(['wallet']);
  }

  handleOrderClick() {
    this.router.navigate(['orders']);
  }
}
