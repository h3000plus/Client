import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  mode: boolean = true;


  handleDeliveryClick(){
    this.mode = true;
    localStorage.setItem('mode', JSON.stringify(this.mode));
    this.router.navigate(['delivery'])
  }
  handlePickupClick(){
    this.mode = false;
    localStorage.setItem('mode', JSON.stringify(this.mode));
    this.router.navigate(['pickup'])
  }
  handleResrvationClick(){
    this.router.navigate(['reservation'])
  }
}
