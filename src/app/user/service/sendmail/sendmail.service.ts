import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private http : HttpClient) { }

  private baseURL = `http://localhost:3000/SendMail`;

  post(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/send`, request);
	}

  sendConfirm(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/sendConfirm`, request);
	}

  sendDangGiao(request: any): Observable<any> {
		return this.http.post(`${this.baseURL}/sendDangGiao`, request);
	}
}
