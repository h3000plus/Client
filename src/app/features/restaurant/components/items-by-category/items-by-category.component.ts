import { Component, Input } from '@angular/core';
// import { Restaurant } from '../../../../shared/models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../../../../services/delivery.service';
import { IItem } from '../../../../shared/models/item.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-items-by-category',
  templateUrl: './items-by-category.component.html',
  styleUrl: './items-by-category.component.scss'
})
export class ItemsByCategoryComponent {

  constructor(private route: ActivatedRoute, private _deliveryService: DeliveryService, private router: Router) {}
  @Input() items: any = [];
  restaurantId: string = "";
  ngOnInit(): void {
    // this.route.params.pipe(
    //   switchMap((params) => {
    //     this.restaurantId = params['_id'];
    //     return this._deliveryService.restaurantItems(this.restaurantId);
    //   })
    // ).subscribe((data) => {
    //   this.items = data;
    // });
  }

  handleItemClick(item: IItem) {
    this.router.navigate(['/item', item?._id]);
  }

  @Input() category!: {title: string};

}
