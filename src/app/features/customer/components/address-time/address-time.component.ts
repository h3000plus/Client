import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-time',
  templateUrl: './address-time.component.html',
  styleUrl: './address-time.component.scss'
})
export class AddressTimeComponent {

  constructor(private router: Router) {}

  handleAddressDetails() {
    this.router.navigate(['customer/address'])
  }

  back() {
    history.back();
  }

  handleSchedule() {
    this.router.navigate(['schedule'])
  }
}
