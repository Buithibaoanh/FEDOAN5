import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NhacungcapService {

  constructor(private http : HttpClient) { 

  }
  private baseURL = `http://localhost:3000/QLNhaCC`;

  getList() : Observable<any[]> {
      return this.http.get<any>(`${this.baseURL}/`);
  }
  
  getById(id : number) : Observable<any> {
    return this.http.get<any>(`${this.baseURL}/get-one/${id}`);
  }

  postFile(request: any): Observable<any> {
    return this.http.post('http://localhost:3000/loaisp/', request);
  }

  postQLNhaCC(request: any): Observable<any> {
    return this.http.post(`${this.baseURL}/add`, request);
  }

  Them(request: any): Observable<any> {
    return this.http.post(`${this.baseURL}/Them`, request);
  }

  putQLNhaCC(id: number, request: any):Observable<any> {
    return this.http.post(`${this.baseURL}/edit/${id}`, request)
  }

  deleteQLNhaCC(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/remove/${id}`);
    }
}
