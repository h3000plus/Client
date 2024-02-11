import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}
  baseURL: string = 'https://marketplace-client-bento.koyeb.app';

  _token: string = JSON.parse(localStorage.getItem('token') as string);

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    token: this._token,
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  restaurantItems(restaurantId: string): Observable<any> {
    return this.http.get(
      `${this.baseURL}/items/${restaurantId}`,
      this.requestOptions
    );
  }

  restaurantDetails(restaurantId: string): Observable<any> {
    return this.http.get(`${this.baseURL}/details/${restaurantId}`);
  }

  searchRestaurant(searchTerm: string): Observable<any> {
    console.log(searchTerm);
    return this.http.get(
      `${this.baseURL}/restaurants/delivery/search?searchTerm=${searchTerm}`
    );
  }

  filteredRestaurants({
    mode,
    searchTerm,
    cuisine,
  }: {
    mode: string;
    searchTerm: string;
    cuisine: string;
  }): Observable<any> {
    return this.http.get(
      `${this.baseURL}/restaurants?mode=${mode}&searchTerm=${searchTerm}&cuisine=${cuisine}`
    );
  }

  getCuisines(): Observable<any> {
    return this.http.get(`${this.baseURL}/all-cuisines`);
  }

  deliveryRestaurants(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/restaurants/delivery`,
      this.requestOptions
    );
  }
}
