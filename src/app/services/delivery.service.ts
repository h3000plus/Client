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

  searchRestaurant(searchTerm: string): Observable<any> {
    console.log(searchTerm);
    return this.http.get(`http://localhost:3000/restaurants/delivery/search?searchTerm=${searchTerm}`);
  }

  deliveryRestaurants(): Observable<any> {
    console.log(this.headerDict)
    return this.http.get('http://localhost:3000/restaurants/delivery', this.requestOptions)
  }
}
