import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonhangService {

  constructor(private http : HttpClient) {
        
  }

  private baseURL = `http://localhost:3000`;

  getList() : Observable<any[]> {
      return this.http.get<any>(`${this.baseURL}/QLDonhang`);
  }
  getById(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/QLDonhang/get-one/${id}`);
	}
  getBydonhangId(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/QLDonhang/get-one-donhang/${id}`);
	}
  putdonhang(id: number, request: any):Observable<any> {
		return this.http.post(`${this.baseURL}/QLDonhang/edit/${id}`, request)
	}
  refuseDonHang(id: number, request: any):Observable<any> {
		return this.http.post(`${this.baseURL}/QLDonhang/refuse/${id}`, request)
  }
  cancelDonHang(id: number, request: any):Observable<any> {
		return this.http.post(`${this.baseURL}/QLDonhang/cancel/${id}`, request)
  }
  updateStatus(id: number, request: any):Observable<any> {
		return this.http.post(`${this.baseURL}/QLDonhang/updateStatus/${id}`, request)
  }
  searchOrders(criteria: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseURL}/QLDonhang/search`, criteria);
  }
}
