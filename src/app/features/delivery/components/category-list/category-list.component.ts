import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../../../shared/models/category.model';
import { HttpClient } from '@angular/common/http';
import { DeliveryService } from '../../../../services/delivery.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  constructor(private deliveryService: DeliveryService, private http: HttpClient, private router: Router,) { }

  categories: any = [
    { name: 'American', image: "https://i.ibb.co/hWxLKQh/american.png" },
    { name: 'Asian', image: "https://i.ibb.co/jr810xQ/asian.png" },
    { name: 'Arabian', image: "https://i.ibb.co/vPdzp1P/arabian.png" },
    { name: 'Bar', image: "https://i.ibb.co/bRQVRg5/bar.png" },
    { name: 'Dessert', image: "https://i.ibb.co/98cs9Jm/dessert.png" },
    { name: 'English', image: "https://i.ibb.co/1vHykMB/english.png" },
    { name: 'European', image: "https://i.ibb.co/9hthNJp/european.png" },
    { name: 'Italian', image: "https://i.ibb.co/T2sj07r/italian.png" },
    { name: 'Indian', image: "https://i.ibb.co/WGMmk0h/indian.png" },
    { name: 'Vegan', image: "https://i.ibb.co/3RW3T3L/vegan.png" },
    { name: 'Miscellaneous', image: "https://i.ibb.co/WxJDsrp/miscellanous.png" },
  ];
  // @Input()
  // handleCuisine!: ((args: any) => void);

  @Input()
  filters: any

  @Input()
  restaurants: any = [];


  @Output() restaurantsChange = new EventEmitter<any>()
  //  handlePriceClick() {

  //    console.log('before',this.priceDisplay)
  //    this.priceDisplay = true
  //    this.priceDisplayChange.emit(this.priceDisplay)

  //  } 

  /**
   * Navigates to the category page when the category icon is clicked.
   */
  // categories: Category[] = [
  //   {
  //     name: 'Pizza',
  //     image: '/assets/icons/pizza.png'
  //   },
  //   {
  //     name: 'Chinese',
  //     image: '/assets/icons/chinese-food.png'
  //   },
  //   {
  //     name: 'Sushi',
  //     image: '/assets/icons/sushi.png'
  //   },
  //   {
  //     name: 'Sushi',
  //     image: '/assets/icons/sushi.png'
  //   },
  //   {
  //     name: 'Sushi',
  //     image: '/assets/icons/sushi.png'
  //   },
  //   {
  //     name: 'Sushi',
  //     image: '/assets/icons/sushi.png'
  //   },
  //   {
  //     name: 'Sushi',
  //     image: '/assets/icons/sushi.png'
  //   },
  // ];

  ngOnInit() {
    // this.restaurantDisplayChange.emit(this.restaurants)

    /*  this.deliveryService.getCuisines().subscribe((data) => {
       this.categories = data.cuisines}) */
  }

  handleCuisine(name: string) {
    this.filters.cuisine = name;
    const mode = "delivery";
    const searchTerm = "";
    const cuisine = name;
    const price = "";
    this.deliveryService.filteredRestaurants({ mode, searchTerm, cuisine, price }).subscribe((data) => {
      this.restaurants = data
      this.restaurantsChange.emit(this.restaurants)
    })

  }

  // handleCategoryIconClick() {
  //   this.router.navigate(['delivery/category']);
  // }
}
