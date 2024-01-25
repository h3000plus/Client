import { Component, Input } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private _deliveryService: DeliveryService, private router: Router) { }
  // items: IItem[] = [];

   
   @Input() items : any = []
  restaurantId: string = "";
  ngOnInit(): void {

  }

  handleItemClick(item: IItem) {
    this.router.navigate(['/item', item?._id]);
  }
}
