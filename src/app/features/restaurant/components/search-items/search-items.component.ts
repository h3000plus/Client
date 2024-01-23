import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from '../../../../shared/models/item.model';
import { ItemService } from '../../../../services/item.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrl: './search-items.component.scss'
})
export class SearchItemsComponent {

  constructor(private router: Router, private itemService: ItemService, private route: ActivatedRoute) {}
  items: IItem[] = [];
  resId: string = "";

  ngOnInit () {
    this.route.params.pipe(
      switchMap((params) => {
        this.resId = params['_id'];
        return this.resId;
      })
    ).subscribe();
  }

  searchItem(query: KeyboardEvent){
    if (query) {
      const element = query.target as HTMLInputElement;
      if (element.value.length > 0) {
        this.itemService.searchRestaurantItem(this.resId, element.value).subscribe(
          (data) => {
            this.items = data
            console.log(data)
          }
        )
      }
    }
  }

  handleItemClick(item: IItem) {
    this.router.navigate(['/item', item?._id]);
  }

  handleLeftClick(){
    this.router.navigate(['restaurant', this.resId]);
  }
}
