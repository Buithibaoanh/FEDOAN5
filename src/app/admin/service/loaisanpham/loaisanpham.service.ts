import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaisanphamService {

    constructor(private http : HttpClient) {
        
    }

    private baseURL = `http://localhost:3000`;

    getList() : Observable<any[]> {
        return this.http.get<any>(`${this.baseURL}/loaisp`);
    }
    
	getById(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/loaisp/get-one/${id}`);
	}

	postFile(request: any): Observable<any> {
		return this.http.post('http://localhost:3000/loaisp/', request);
	}
	
	postLoaiSp(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/loaisp/add`, request);
	}

	putLoaiSp(id: number, request: any):Observable<any> {
		return this.http.post(`${this.baseURL}/loaisp/edit/${id}`, request)
	}

	deleteLoaiSp(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/loaisp/remove/${id}`);
    }
	search(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/loaisp/search`, request);
	}
}
