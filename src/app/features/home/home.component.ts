import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  mode: boolean = true;
  token: string = '';
  reservationURL: string = 'http://localhost:5173/reserve';

  handleDeliveryClick() {
    this.mode = true;
    localStorage.setItem('mode', JSON.stringify(this.mode));
    this.router.navigate(['delivery']);
  }
  handlePickupClick() {
    this.mode = false;
    localStorage.setItem('mode', JSON.stringify(this.mode));
    this.router.navigate(['pickup']);
  }
  async handleResrvationClick() {
    this.token = localStorage.getItem('token') as string;
    this.token = this.token.replace(/["/" ]/g, '');
    console.log(this.token);
    window.location.href = `${this.reservationURL}?token=${this.token}`;
  }
}
