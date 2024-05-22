import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhoService {

  constructor(private http : HttpClient) {
        
  }

  private baseURL = `http://localhost:3000/kho`;

  getList() : Observable<any[]> {
      return this.http.get<any>(`${this.baseURL}/`);
  }
  
  getById(id : number) : Observable<any> {
    return this.http.get<any>(`${this.baseURL}/get-one/${id}`);
  }

  postFile(request: any): Observable<any> {
    return this.http.post('http://localhost:3000/loaisp/', request);
  }

  postLoaiSp(request: any): Observable<any> {
    return this.http.post(`${this.baseURL}/add`, request);
  }

  Them(request: any): Observable<any> {
    return this.http.post(`${this.baseURL}/Them`, request);
  }

  putLoaiSp(id: number, request: any):Observable<any> {
    return this.http.post(`${this.baseURL}/edit/${id}`, request)
  }

  deleteLoaiSp(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/remove/${id}`);
    }
}
