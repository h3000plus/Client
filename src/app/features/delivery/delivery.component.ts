import { Component } from '@angular/core';
import { Restaurant } from '../../shared/models/restaurant.model';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {
  filters = {
    mode: "",
    cuisine: "",
    price: "",
    deliveryFee: "",
    like: ""
  }
  priceDisplay : boolean = false;
  feeDisplay : string = 'hidden';
  likeDisplay : string = 'hidden';




  zIndex: number = 2;
  pIndex: number = 1;
  fIndex: number = 2;
  lIndex: number = 2;

  constructor(private router: Router, private deliveryService: DeliveryService) {


  }

  showModal: boolean = false;
  categories = [{title: "recently viewed"}, {title: "recommended for you"}, {title: "popular"}, {title: "top 10"}]
  restaurants : any = [];

  categoryTitle: string = '';
  data: Restaurant[] = [];
  recentlyViewedData: Restaurant[] = [];
  popularData: Restaurant[] = [];

  searchStatus: boolean = false;

ngOnInit(){

  const mode = "delivery";
  const searchTerm = "";
  const cuisine= "";
  this.deliveryService.filteredRestaurants({mode, searchTerm, cuisine}).subscribe( (data) => {
    this.restaurants = data
  })
}


  handleCuisine(name: string) {
    this.filters.cuisine = name;
    console.log(this.filters)
    // this.deliveryService.filteredRestaurants(this.filters).subscribe((data)=>{


    // })
  }

  handlePrice(price: string) {
    this.filters.price = price;
  }

  handleDeliveryFee(fee: string) {
    this.filters.deliveryFee = fee;
  }

  handleLike(like: string) {
    this.filters.like = like;
  }

  handleSearchClick() {
    this.router.navigate(['delivery/search']);
  }

}
