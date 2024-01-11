import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants-grid',
  templateUrl: './restaurants-grid.component.html',
  styleUrl: './restaurants-grid.component.scss'
})
export class RestaurantsGridComponent {
  @Input() restaurant!: {_id: string, name: string, image: string}
}
