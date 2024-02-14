import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://marketplace-client-bento.koyeb.app';
  // baseURL: string = 'http://localhost:3000';

  itemDetails(itemId: string): Observable<any> {
    return this.http.get(`${this.baseURL}/itemDetails/${itemId}`);
  }

  searchRestaurantItem(resId: string, searchTerm: string): Observable<any> {
    return this.http.get(
      `${this.baseURL}/items/${resId}/search?searchTerm=${searchTerm}`
    );
  }
}
