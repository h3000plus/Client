import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../shared/models/customer.model';
import { ICustomerLogin } from '../shared/models/customerLogin.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  login(loginData: ICustomerLogin): Observable<any> {
    return this.http.post('http://localhost:3000/login', loginData);
  }

  signup(customerData: ICustomer): Observable<any> {
    return this.http.post('http://localhost:3000/signup', customerData);
  }

  isExistEmail(email: string): Observable<any> {
    return this.http.post('http://localhost:3000/check-email', { email });
  }
}
