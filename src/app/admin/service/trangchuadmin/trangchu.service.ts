import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrangchuService {
  
  constructor(private http: HttpClient) {}

  private baseURL = `http://localhost:3000/trangchuadmin/orders`;
  
  getOrders(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
  getOrdersStatus0(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/status-0`);
  }
  getOrdersStatus2(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/status-2`);
  }
  getOrderSummary(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/summary`);
  }
  getTodayOrders(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/today`);
  }
  getOrderDetails(orderId: number): Observable<any> {
    const url = `${this.baseURL}/${orderId}`;
    return this.http.get<any>(url);
  }
  getById(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/get-one/${id}`);
	}
  getBydonhangId(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/get-one-donhang/${id}`);
	}
  getOrdersthongke(request: any): Observable<any> {
    return this.http.post(`http://localhost:3000/trangchuadmin/orders/Thongke`, request);
  }
}
