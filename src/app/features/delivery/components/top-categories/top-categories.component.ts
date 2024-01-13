import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.scss'
})
export class TopCategoriesComponent {
  constructor(private router: Router) {}
  /**
   * Navigates to the category page when the category icon is clicked.
   */
  categories: Category[] = [
    {
      name: 'Pizza',
      image: '/assets/icons/pizza.png'
    },
    {
      name: 'Chinese',
      image: '/assets/icons/chinese-food.png'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
    {
      name: 'Chinese',
      image: '/assets/icons/chinese-food.png'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
    {
      name: 'Pizza',
      image: '/assets/icons/pizza.png'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
  ];
}
