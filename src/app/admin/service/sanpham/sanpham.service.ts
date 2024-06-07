import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jsPDF from 'jspdf';


@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  constructor(private http : HttpClient) {
        
  }

  private baseURL = `http://localhost:3000`;
  

	getList() : Observable<any[]> {
		return this.http.get<any>(`${this.baseURL}/QLSanpham`);
	}
  	getById(id : number) : Observable<any> {
		return this.http.get<any>(`${this.baseURL}/QLSanpham/get-one/${id}`);
	}

	postFile(request: any): Observable<any> {
		return this.http.post('http://localhost:3000/QLSanpham/', request);
	}
	
	postLoaiSp(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/QLSanpham/add`, request);
	}

	putLoaiSp(id: number, request: any):Observable<any> {
		return this.http.post(`${this.baseURL}/QLSanpham/edit/${id}`, request)
	}

	deleteLoaiSp(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/QLSanpham/remove/${id}`);
    }

	search(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/QLSanpham/search`, request);
	}
  
	generatePDF(htmlContent: string, fileName: string) {
		const doc = new jsPDF();
		doc.html(htmlContent, {
		  callback: (doc) => {
			doc.save(fileName);
		  }
		});
	  }
  
}
