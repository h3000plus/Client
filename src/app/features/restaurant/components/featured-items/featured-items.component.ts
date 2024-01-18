import { Component } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';
import { IItem } from '../../../../shared/models/item.model';
import { DeliveryService } from '../../../../services/delivery.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrl: './featured-items.component.scss'
})
export class FeaturedItemsComponent {

  constructor(private route: ActivatedRoute, private _deliveryService: DeliveryService, private router: Router) {}
  items: IItem[] = [];
  restaurantId: string = "";
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => {
        this.restaurantId = params['_id'];
        return this._deliveryService.restaurantItems(this.restaurantId);
      })
    ).subscribe((data) => {
      this.items = data;
    });
  }

  handleItemClick(item: IItem) {
    this.router.navigate(['/item', item?._id]);
  }
}
