import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrl: './loyalty.component.scss'
})
export class LoyaltyComponent {
  constructor(private router: Router) {}

  points: any[] = [
    {
      log: "earned",
      points: 40,
      image: "/assets/icons/leaf.svg"
    },
    {
      log: "earned",
      points: 50,
      image: "/assets/icons/leaf.svg"
    },
    {
      log: "earned",
      points: 1000,
      image: "/assets/icons/leaf.svg"
    },
    {
      log: "spent",
      points: 100,
      image: "/assets/icons/leaf.svg"
    },
    {
      log: "spent",
      points: 40,
      image: "/assets/icons/leaf.svg"
    }
  ]

  handleback() {
    this.router.navigate(['account'])
  }
}
