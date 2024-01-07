import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
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
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/sushi.png'
    },
  ];
  handleCategoryIconClick() {
    this.router.navigate(['delivery/category']);
  }
}
