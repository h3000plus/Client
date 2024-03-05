import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../shared/models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  // baseURL: string = 'https://marketplace-client-bento.koyeb.app';
  baseURL: string = 'http://localhost:3000';

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

  createOrder(order: IOrder): Observable<any> {
    console.log(JSON.stringify(order));
    return this.http.post(`${this.baseURL}/order`, order, this.requestOptions);
  }

  createScheduleOrder(order: IOrder): Observable<any> {
    return this.http.post(
      `${this.baseURL}/schedule-order`,
      order,
      this.requestOptions
    );
  }

  getCompletedOrders(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/orders/completed`,
      this.requestOptions
    );
  }

  getProcessingOrders(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/orders/processing`,
      this.requestOptions
    );
  }

  getOrderUserId(): Observable<any> {
    return this.http.get(
      `${this.baseURL}/order-user-id`,
      this.requestOptions
    );
  }

  getOrderDetails(id: string): Observable<any> {
    return this.http.get(
      `${this.baseURL}/order-details/${id}`,
      this.requestOptions
    );
  }

}
