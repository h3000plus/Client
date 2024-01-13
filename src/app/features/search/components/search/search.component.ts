import { Component, ElementRef, Input, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @ViewChild('searchRestaurant', {read: ElementRef}) searchRestaurant: QueryList<ElementRef> | undefined;
  ngDoCheck() {
    console.log(this.searchRestaurant);
  }
}
