import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../../shared/models/restaurant.model';

@Component({
  selector: 'app-restaurants-by-category',
  templateUrl: './restaurants-by-category.component.html',
  styleUrl: './restaurants-by-category.component.scss'
})
export class RestaurantsByCategoryComponent {
  restaurants: Restaurant[] = [
    {
      _id: '1',
      name: 'Dummy Restaurant 1',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    },
    {
      _id: '2',
      name: 'Dummy Restaurant 2',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    },
    {
      _id: '3',
      name: 'Dummy Restaurant 3',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    },
    {
      _id: '4',
      name: 'Dummy Restaurant 4',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    },
    {
      _id: '5',
      name: 'Dummy Restaurant 5',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    },
    {
      _id: '6',
      name: 'Dummy Restaurant 6',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    },
    {
      _id: '7',
      name: 'Dummy Restaurant 7',
      image: 'https://media.istockphoto.com/id/1409730005/photo/chef-cooking-at-a-restaurant-and-flaming-the-food.jpg?s=1024x1024&w=is&k=20&c=KvPvEJruhwHuUk1RuzwZwgyfUajtFt_F_-r5uDhgflc='
    }
  ];
  isLoading: boolean = false;
  @Input() category!: {title: string};
}
