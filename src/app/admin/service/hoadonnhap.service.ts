import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoadonnhapService {

  constructor(private http : HttpClient) { }
  private baseURL = `http://localhost:3000/QLhoadonnhap`;

  getHoaDonNhap() : Observable<any[]> {
      return this.http.get<any>(`${this.baseURL}/`);
  }
  
  Them(request: any): Observable<any> {
    return this.http.post(`${this.baseURL}/Them`, request);
  }
  getById(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/get-one/${id}`);
	}
  getByhoadonnhapId(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/get-one-hoadonnhap/${id}`);
  }
}
