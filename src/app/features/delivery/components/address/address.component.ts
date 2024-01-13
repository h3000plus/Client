import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

  constructor(private router: Router) {}

  handleAddressIconClick() {
    this.router.navigate(['customer/search-address']);
  }
}
