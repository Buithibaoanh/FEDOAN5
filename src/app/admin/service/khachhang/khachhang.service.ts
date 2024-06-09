import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KhachhangService {

  constructor(private http : HttpClient) { }
  
  private baseURL = `http://localhost:3000/QLKhachhang`;

  getList() : Observable<any[]> {
      return this.http.get<any>(`${this.baseURL}/`);
  }
  
  getById(id : number) : Observable<any> {
    return this.http.get<any>(`${this.baseURL}/get-one/${id}`);
  }

  getData(id : any) : Observable<any> {
    console.log(id);
    
    return this.http.get<any>(`${this.baseURL}/getOrders/${id}`);
  }

}
