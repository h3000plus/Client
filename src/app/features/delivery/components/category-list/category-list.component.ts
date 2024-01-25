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
  constructor(private deliveryService: DeliveryService,private http:HttpClient,private router: Router, ) {}

  categories: any = [];
  // @Input()
  // handleCuisine!: ((args: any) => void);

  @Input()
  filters : any

  @Input()
   restaurants : any = [];

   
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
    this.deliveryService.getCuisines().subscribe((data) => {
      this.categories = data.cuisines})
  }

  handleCuisine(name : string){
    this.filters.cuisine = name;
    const mode = "delivery";
    const searchTerm = "";
    const cuisine= name;
      this.deliveryService.filteredRestaurants({mode, searchTerm, cuisine}).subscribe( (data) => {
        this.restaurants = data
        this.restaurantsChange.emit(this.restaurants)
  })

  }

  // handleCategoryIconClick() {
  //   this.router.navigate(['delivery/category']);
  // }
}
