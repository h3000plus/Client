import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../shared/models/customer.model';
import { ICustomerLogin } from '../shared/models/customerLogin.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://marketplace-client-bento.koyeb.app';
  // baseURL: string = 'http://localhost:3000';

  login(loginData: ICustomerLogin): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, loginData);
  }

  signup(customerData: ICustomer): Observable<any> {
    return this.http.post(`${this.baseURL}/signup`, customerData);
  }

  isExistEmail(email: string): Observable<any> {
    return this.http.post(`${this.baseURL}/check-email`, { email });
  }
}
