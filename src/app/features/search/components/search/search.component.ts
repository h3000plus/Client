import { Component, ElementRef, Input, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @ViewChild('searchRestaurant', {static:true}) searchRestaurant: any;
  // private listenForPlotChanges() {
  //   this.searchRestaurant?.changes.subscribe(
  //     (next: QueryList<ElementRef>) => {
  //       console.log('listenForPlotChanges next:', next);
  //     }
  //   )
  // }
  @Input() search: any;
  onChange() {
    this.search(this.searchRestaurant.nativeElement.value)
    // console.log(this.searchRestaurant.nativeElement.value)
  }

}
