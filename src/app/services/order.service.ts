import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../shared/models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

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

  createOrder(order: IOrder): Observable<any> {
    return this.http.post('http://localhost:3000/order', order,  this.requestOptions);
  }

  createScheduleOrder(order: IOrder): Observable<any> {
    return this.http.post('http://localhost:3000/schedule-order', order, this.requestOptions);
  }

  getCompletedOrders(): Observable<any> {
    return this.http.get('http://localhost:3000/orders/completed', this.requestOptions);
  }

  getProcessingOrders(): Observable<any> {
    return this.http.get('http://localhost:3000/orders/processing', this.requestOptions);
  }
}
