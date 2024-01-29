import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-filter',
  templateUrl: './like-filter.component.html',
  styleUrl: './like-filter.component.scss'
})
export class LikeFilterComponent {

  constructor(private router: Router) {}

  selectedLike: string = "";

  handleSelected(event: any) {
    this.selectedLike = event.target.value;
  }

  // Like
  @Input() likeDisplay: boolean | undefined;
  @Output()  likeDisplayChange = new EventEmitter<boolean>()

  @Input() filters: any;
  @Output()  filtersChange = new EventEmitter<any>()

  handleLikeApply() {
    // console.log('before', this.filters)
    this.filters.like = this.selectedLike;
    this.filtersChange.emit(this.filters)

    this.likeDisplay = false;
    this.likeDisplayChange.emit(this.likeDisplay);
  }

  reset() {
    this.filters.like = "";
    this.filtersChange.emit(this.filters)

    this.likeDisplay = false;
    this.likeDisplayChange.emit(this.likeDisplay);
  }
}
