import { Component } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  orders: Category[] = [
    {
      name: 'something',
      image: ''
    },
    {
      name: 'something',
      image: ''
    },
    {
      name: 'something',
      image: ''
    },
    {
      name: 'something',
      image: ''
    }
  ]
}
