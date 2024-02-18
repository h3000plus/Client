import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-scroll-categories',
  templateUrl: './scroll-categories.component.html',
  styleUrl: './scroll-categories.component.scss',
})
export class ScrollCategoriesComponent {
  // categories = [{title: "Pizza"}, {title: "Pasta"}, {title: "Dessert"}, {title: "Chicken"}, {title: "Sandwich"}, {title: "Soup"}, {title: "Dessert"}, {title: "Dessert"}];

  constructor(
    private route: ActivatedRoute,
    private _deliveryService: DeliveryService
  ) {}

  @Input() categories: any;
  @Input() items: any;

  restaurantName: string = '';
  showHeader: boolean = false;

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          // this.restaurantId = params['_id'];
          return this._deliveryService.restaurantDetails(params['_id']);
        })
      )
      .subscribe((data) => {
        console.log('data', data);
        this.restaurantName = data.name;
      });
  }

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
