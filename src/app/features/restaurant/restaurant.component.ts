import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {

  constructor(private router: Router, private route: ActivatedRoute, private _deliveryService: DeliveryService) {}
  // categories = [{title: "Pizza"}, {title: "Pasta"}, {title: "Dessert"}, {title: "Chicken"}, {title: "Sandwich"}, {title: "Soup"}, {title: "Dessert"}, {title: "Dessert"}]

  handleCartClick() {
    this.router.navigate(['/cart']);
  }

  restaurantId : string = "";
  categories: any = [];
  items : any = {}; 

  ngOnInit(){
    this.route.params.pipe(
      switchMap((params) => {
        this.restaurantId = params['_id'];
        return this._deliveryService.restaurantItems(this.restaurantId);
      })
    ).subscribe((data) => {
      this.items = data;
      this.categories = Object.keys(this.items).slice(1)
      // console.log(this.categories)
      // for (let [key,value] of Object.entries(this.items)) {
      //   this.categories.push(key);
      // }
      // this.categories.slice(1);
      // console.log(this.items)
    });
  }
}
