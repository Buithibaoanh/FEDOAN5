import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) {
        
  }

  private baseURL = `http://localhost:3000/QLDonHang`;

  post(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/ThemDH`, request);
	}
}
