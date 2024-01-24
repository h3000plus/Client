import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http:HttpClient) { }

  _token: string = JSON.parse(localStorage.getItem('token') as string)

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'token': this._token
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  restaurantItems(restaurantId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/items/${restaurantId}`);
  }

  restaurantDetails(restaurantId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/details/${restaurantId}`);
  }

  searchRestaurant(searchTerm: string): Observable<any> {
    console.log(searchTerm);
    return this.http.get(`http://localhost:3000/restaurants/delivery/search?searchTerm=${searchTerm}`);
  }

  filteredRestaurants(mode: string, searchTerm: string, cuisine: string): Observable<any> {
    return this.http.get(`http://localhost:3000/restaurants?mode=${mode}&searchTerm=${searchTerm}&cuisine=${cuisine}`);
  }

  getCuisines(): Observable<any> {
    return this.http.get('http://localhost:3000/all-cuisines')
  }

  deliveryRestaurants(): Observable<any> {
    return this.http.get('http://localhost:3000/restaurants/delivery', this.requestOptions)
  }
}
