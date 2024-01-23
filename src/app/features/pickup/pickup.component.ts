import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrl: './pickup.component.scss'
})
export class PickupComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    
  }
  handleSearchClick(){
    this.router.navigate(['pickup/search']);
  }
}
