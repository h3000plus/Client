import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.scss'
})
export class AllCategoriesComponent {
  categories: Category[] = [
    {
      name: 'Pizza',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Chinese',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Chinese',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Pizza',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
    {
      name: 'Sushi',
      image: '/assets/icons/catg.jpg'
    },
  ];
}
