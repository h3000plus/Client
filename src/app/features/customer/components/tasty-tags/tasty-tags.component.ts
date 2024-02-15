import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasty-tags',
  templateUrl: './tasty-tags.component.html',
  styleUrl: './tasty-tags.component.scss'
})
export class TastyTagsComponent {

  tastyTags: string[] = ['Savory', 'Spicy', 'Sweet', 'Sour', 'Bitter', 'Salty', 'Rich', 'Smoky', 'Tangy', 'Creamy', 'Zesty', 'Herby', 'Fruity', 'Nutty', 'Floral', 'Earthy', 'Citrusy', 'Buttery', 'Tart', 'Fresh'];

  constructor(private router: Router) { }

  selectedTags: any = {}

  addOrRemoveFromSelectedTagsArray(tag: string) {
    if (this.selectedTags[tag]) {
      delete this.selectedTags[tag]
    } else {
      this.selectedTags[tag] = 1
    }
    console.log(this.selectedTags);
  }

  handleNextClick(): void {

  }

  isNexBtnEnabled(): boolean {
    if (Object.keys(this.selectedTags).length > 0) {
      return false
    } else {
      return true;
    }
  }

  onNextButtonClick() {
    if (Object.keys(this.selectedTags).length > 0) {
      const localStorageData = JSON.parse(localStorage.getItem('user') as any)
      localStorageData.tastyTags = this.selectedTags;
      localStorage.setItem('user', JSON.stringify(localStorageData))
      this.router.navigate(['customer/address'])

    }
  }

  back() {
    this.router.navigate(['customer/date-of-birth'])
  }


}
