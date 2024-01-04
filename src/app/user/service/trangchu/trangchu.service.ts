import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrangchuService {
  constructor(private http : HttpClient) {
        
  }

  private baseURL = `http://localhost:3000`;
  getLoaisp() : Observable<any[]> {
    return this.http.get<any>(`${this.baseURL}/loaisp`);
  }

  getList(sl : number) : Observable<any[]> {
      return this.http.get<any>(`${this.baseURL}/trangchu/${sl}`);
  }
  getById(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/trangchu/get-one/${id}`);
	}
  getspmv(sl : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/trangchu/spmv/${sl}`);
	}
  getcategori(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/trangchu/categori/${id}`);
	}

	
}
