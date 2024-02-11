import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-scroll-categories',
  templateUrl: './scroll-categories.component.html',
  styleUrl: './scroll-categories.component.scss',
})
export class ScrollCategoriesComponent {
  // categories = [{title: "Pizza"}, {title: "Pasta"}, {title: "Dessert"}, {title: "Chicken"}, {title: "Sandwich"}, {title: "Soup"}, {title: "Dessert"}, {title: "Dessert"}];

  @Input() categories: any;
  @Input() items: any;
  showHeader: boolean = false;

  ngOnInit() {}

  // items: Restaurant[] = [
  //   {
  //     _id: '1',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "1",
  //     delivery: true,
  //     pickup: true
  //   },
  //   {
  //     _id: '2',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "2",
  //     delivery: true,
  //     pickup: true
  //   },
  //   {
  //     _id: '3',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "3",
  //     delivery: true,
  //     pickup: true
  //   },
  //   {
  //     _id: '4',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "4",
  //     delivery: true,
  //     pickup: true
  //   },
  //   {
  //     _id: '5',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "5",
  //     delivery: true,
  //     pickup: true
  //   },
  //   {
  //     _id: '6',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "6",
  //     delivery: true,
  //     pickup: true
  //   },
  //   {
  //     _id: '7',
  //     name: 'Barano NYC',
  //     image: '/assets/icons/restaurant.jpeg',
  //     deliveryFee: 50,
  //     deliveryTime: 100,
  //     like: "4.1k",
  //     category_id: "7",
  //     delivery: true,
  //     pickup: true
  //   },
  // ];

  handleItemClick(restaurant: Restaurant) {}

  handleCategoryClick(category: string) {
    const el = document.getElementById(category);
    el?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  @ViewChild('foodItems') divFoodItems!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    // const windowHeight = window.innerHeight;

    const boundingRectFoodItems =
      this.divFoodItems.nativeElement.getBoundingClientRect();

    if (boundingRectFoodItems.top <= 207) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }
}
