import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-filter',
  templateUrl: './like-filter.component.html',
  styleUrl: './like-filter.component.scss'
})
export class LikeFilterComponent {

  constructor(private router: Router) {}

  handleApply() {

  }

  reset() {
    this.router.navigate(['delivery'])
  }
}
