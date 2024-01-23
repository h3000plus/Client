import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../shared/models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  createOrder(order: IOrder): Observable<any> {
    return this.http.post('http://localhost:3000/order', order);
  }

  createScheduleOrder(order: IOrder): Observable<any> {
    return this.http.post('http://localhost:3000/schedule-order', order);
  }
}
